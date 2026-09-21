/* A TOUT SERVICE — JS minimal (menu mobile, en-tête, apparitions, formulaire) */
(function () {
  var doc = document.documentElement;
  var header = document.querySelector('.site-header');
  var burger = document.querySelector('.burger');

  /* Hauteur de l'en-tête (pour le panneau mobile) */
  function setH() { if (header) doc.style.setProperty('--header-h', header.getBoundingClientRect().bottom + 'px'); }
  setH(); window.addEventListener('resize', setH);

  /* Menu mobile */
  if (burger && header) {
    burger.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
      setH();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) { burger.click(); burger.focus(); }
    });
  }

  /* Ombre de l'en-tête au défilement */
  var onScroll = function () { if (header) header.classList.toggle('is-scrolled', window.scrollY > 8); };
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  /* Apparition au défilement (désactivée si mouvement réduit) */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Formulaire de contact
     - pré-sélection du service via ?service=slug
     - tant qu'aucun service d'envoi n'est branché (action contenant "A-CONFIGURER"),
       le message est ouvert dans la messagerie du visiteur (mailto) */
  var form = document.querySelector('#form-contact');
  if (form) {
    var params = new URLSearchParams(location.search);
    var s = params.get('service'), p = params.get('profil');
    if (s && form.service) form.service.value = s;
    if (p) { var r = form.querySelector('input[name="profil"][value="' + p + '"]'); if (r) r.checked = true; }

    form.addEventListener('submit', function (e) {
      if (form.getAttribute('action').indexOf('A-CONFIGURER') === -1) return;
      e.preventDefault();
      if (!form.reportValidity()) return;
      var f = new FormData(form);
      var sel = form.service.options[form.service.selectedIndex];
      var corps = [
        'Nom : ' + f.get('nom'),
        'Téléphone : ' + (f.get('telephone') || '-'),
        'E-mail : ' + f.get('email'),
        'Commune : ' + f.get('commune'),
        'Je suis : ' + (f.get('profil') || '-'),
        'Demande : ' + (sel ? sel.text : '-'),
        '', f.get('message')
      ].join('\n');
      location.href = 'mailto:' + form.dataset.mail + '?subject=' + encodeURIComponent('Demande depuis le site — ' + (sel ? sel.text : '')) + '&body=' + encodeURIComponent(corps);
      var msg = form.querySelector('.form__msg');
      if (msg) msg.textContent = 'Votre messagerie s’ouvre avec votre demande pré-remplie. Vous pouvez aussi nous appeler au 05 59 21 45 20.';
    });
  }

  /* Année du pied de page */
  var y = document.querySelector('[data-annee]'); if (y) y.textContent = new Date().getFullYear();
})();
