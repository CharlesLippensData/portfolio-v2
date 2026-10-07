# Charles Lippens, Data Analyst : portfolio, version 2 (site de six pages)

Ce dépôt publie la version 2 de mon portfolio de Data Analyst : un site statique de six pages, en ligne à l'adresse
https://charleslippensdata.github.io/portfolio-v2/.

## Les trois versions

Le même contenu, à jour au 2 octobre 2026, existe en trois présentations. Toutes renvoient aux mêmes documents, publiés une
seule fois sur le site principal, dans le dossier `livrables/`.

| Version | Présentation | Adresse |
|---|---|---|
| 4, la référence | dossier éditorial, une page longue avec sommaire, imprimable en A4 | https://charleslippensdata.github.io/ |
| 3 | page unique | https://charleslippensdata.github.io/portfolio-v3/ |
| 2 | site de six pages (ce dépôt) | https://charleslippensdata.github.io/portfolio-v2/ |

La version 4 est celle que je dépose et que je présente en soutenance. Les versions 3 et 2 en sont des présentations
alternatives.

## Contenu du dépôt

- `index.html` : l'accueil, avec le statut, la présentation, les chiffres clés du projet 13, les cinq projets phares et la posture.
- `projets.html` : les quatorze fiches de projet (contexte et besoin, démarche, résultats, données, limites et pistes), leurs livrables, des filtres par domaine.
- `mission-ia.html` : la mission du projet 13, avec le contexte, la problématique, les quatre axes, leurs figures et leurs décisions, l'usage responsable de l'IA, l'autonomie des équipes et les livrables.
- `veille.html` : la veille, avec les sept critères, les quatre axes comparés, le dispositif automatisé, la veille métier et dix sources datées.
- `parcours.html` : parcours, formation, compétences reliées à leurs preuves, posture, avis des évaluateurs, langues.
- `contact.html` : courriel, CV, LinkedIn, GitHub, lieu et disponibilité.
- `404.html` : page servie par GitHub Pages pour une adresse inconnue.
- `assets/style.css` et `assets/app.js` : la mise en forme (thème sombre par défaut, thème clair au choix) et trois
  interactions sans dépendance (thème, menu mobile, filtres des projets).
- `assets/fonts/` : Space Grotesk (titres) et Inter (texte), au format WOFF2, avec leurs licences SIL Open Font License
  (`OFL-SpaceGrotesk.txt`, `OFL-Inter.txt`).
- `assets/img/` : les figures du projet 13, la capture du dispositif de veille et l'icône du site.
- `.nojekyll` : GitHub Pages sert les fichiers tels quels.

## Consulter en local

Aucune dépendance, aucune étape de construction. On peut ouvrir `index.html` dans un navigateur, ou servir le dossier :

```bash
python -m http.server 8000
```

puis ouvrir http://localhost:8000/. Les documents à télécharger restent sur le site principal : il faut une connexion
pour les ouvrir.

## Données et confidentialité

- Site statique, sans cookie, sans mesure d'audience et sans formulaire.
- Les polices et les images sont hébergées avec le site : les pages ne chargent rien depuis un autre serveur.
- Le thème choisi se mémorise dans le navigateur seulement (clé `pf-v2-theme` du stockage local).
- Les données des projets de formation sont des jeux fournis ou ouverts ; aucune donnée personnelle de tiers n'est
  publiée. Les figures sont redessinées à partir des sorties du notebook du projet 13 (exécution livrée du 4 août 2026,
  mêmes données).
- Hébergement : GitHub Pages (GitHub, Inc., San Francisco, États-Unis), qui enregistre l'adresse IP des visiteurs pour
  la sécurité du service.

## Droits

Textes, figures et code : © 2026 Charles Lippens. Polices : SIL Open Font License 1.1.

Dernière mise à jour : 2 octobre 2026.
