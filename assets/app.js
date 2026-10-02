/* Charles Lippens, portfolio, version 2 (site de six pages).
   JavaScript sans dépendance : thème sombre ou clair mémorisé dans le navigateur, menu mobile, filtres des projets.
   Sans JavaScript, tout le contenu reste lisible : le thème sombre s'applique et tous les projets sont affichés. */
(function () {
  "use strict";

  var CLE = "pf-v2-theme";
  var racine = document.documentElement;

  /* 1. Thème sombre (par défaut) ou clair, mémorisé dans le navigateur seulement */
  var bouton = document.querySelector(".theme-toggle");
  var meta = document.querySelector('meta[name="theme-color"]');
  function appliquer(theme, memoriser) {
    var sombre = theme === "dark";
    racine.setAttribute("data-theme", theme);
    if (bouton) bouton.setAttribute("aria-pressed", sombre ? "true" : "false");
    if (meta) meta.setAttribute("content", sombre ? "#0B1220" : "#F4F6FB");
    if (memoriser) {
      try { localStorage.setItem(CLE, theme); } catch (e) { /* stockage indisponible */ }
    }
  }
  appliquer(racine.getAttribute("data-theme") === "light" ? "light" : "dark", false);
  if (bouton) {
    bouton.addEventListener("click", function () {
      appliquer(racine.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
    });
  }

  /* 2. Menu mobile : ouverture au bouton, fermeture par Échap, clic hors du menu ou retour en grand écran */
  var burger = document.getElementById("burger");
  var menu = document.getElementById("menu");
  function fermerMenu(rendreFocus) {
    if (!burger || !menu || !menu.classList.contains("is-open")) return;
    menu.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    if (rendreFocus) burger.focus();
  }
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var ouvert = menu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", ouvert ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") fermerMenu(true);
    });
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !burger.contains(e.target)) fermerMenu(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 960) fermerMenu(false);
    });
  }

  /* 3. Filtres des projets, annoncés aux lecteurs d'écran */
  var filtres = Array.prototype.slice.call(document.querySelectorAll(".filtre"));
  var projets = Array.prototype.slice.call(document.querySelectorAll("#grille-projets .projet"));
  var vide = document.getElementById("projets-vide");
  var compte = document.getElementById("projets-compte");
  function filtrer(choisi) {
    var cat = choisi.getAttribute("data-filtre");
    var visibles = 0;
    projets.forEach(function (p) {
      var ok = cat === "tous" || (" " + p.getAttribute("data-cat") + " ").indexOf(" " + cat + " ") !== -1;
      p.classList.toggle("is-hidden", !ok);
      if (ok) visibles++;
    });
    filtres.forEach(function (f) { f.setAttribute("aria-pressed", f === choisi ? "true" : "false"); });
    if (vide) vide.hidden = visibles !== 0;
    if (compte) {
      compte.textContent = visibles + (visibles > 1 ? " projets affichés" : " projet affiché") +
        (cat === "tous" ? "." : ", filtre « " + choisi.textContent + " ».");
    }
  }
  filtres.forEach(function (f) {
    f.addEventListener("click", function () { filtrer(f); });
  });
})();
