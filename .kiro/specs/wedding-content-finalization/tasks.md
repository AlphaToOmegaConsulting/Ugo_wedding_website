# Implementation Plan

- [x] 1. Mettre à jour la palette de couleurs CSS





  - Modifier src/styles/tokens.css avec les couleurs provençales
  - Remplacer --brand-primary par #A3B18A (sauge)
  - Remplacer --brand-primary-hover par #8FA47B
  - Remplacer --brand-secondary par #DCD2C8 (beige pierre)
  - Remplacer --brand-accent par #FAF7F2 (blanc provençal)
  - Remplacer --brand-accent-hover par #F2EDE6
  - Mettre à jour --color-text à #1A1A1A
  - Mettre à jour --color-text-muted à #6B7280
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8_

-

- [x] 2. Créer les fichiers de contenu réel





- [x] 2.1 Créer hero-home.json

  - Créer src/content/sections/hero-home.json
  - Définir type "hero", order 0, visible true
  - Ajouter title "Ugo & Jeanne"
  - Ajouter subtitle "Nous nous marions"
  - Ajouter date "27 juin 2026"
  - Ajouter image placeholder "/hero-couple.jpg"
  - Ajouter CTA "Confirmer ma présence" vers /rsvp
  - Définir variant "centered"
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_


- [x] 2.2 Créer story-home.json

  - Créer src/content/sections/story-home.json
  - Définir type "story", order 1, visible true
  - Ajouter title "Notre histoire"
  - Ajouter content avec l'histoire du couple (HTML)
  - Mentionner Ugo Delassus et Jeanne Lauvergne
  - Mentionner la date du 27 juin 2026
  - Évoquer l'ambiance provençale
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_


- [x] 2.3 Créer programme-home.json

  - Créer src/content/sections/programme-home.json
  - Définir type "programme", order 2, visible true
  - Ajouter title "Programme"
  - Ajouter événement cérémonie à 14h30 à Cathédrale de Nîmes
  - Ajouter événement cocktail à 18h00 au Château de Campuget, Manduel
  - Ajouter événement dîner à 20h30 au Château de Campuget, Manduel
  - Définir variant "timeline"
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_


- [x] 2.4 Créer hebergements-home.json

  - Créer src/content/sections/hebergements-home.json
  - Définir type "hebergements", order 3, visible true
  - Ajouter title "Hébergements recommandés"
  - Ajouter Château de Campuget (sur place)
  - Ajouter Hôtel Le Président (Bellegarde)
  - Ajouter Domaine des Clos (Beaucaire)
  - Définir columns à 3
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 2.5 Créer infos-home.json


  - Créer src/content/sections/infos-home.json
  - Définir type "infos", order 4, visible true
  - Ajouter title "Informations pratiques"
  - Ajouter section Accès (Cathédrale de Nîmes + Château de Campuget)
  - Ajouter section Parking (parking sur place)
  - Ajouter section Météo (chaleur juin, hydratation, protection soleil)
  - Définir layout "grid" et columns 3
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 2.6 Créer rsvp-section-home.json


  - Créer src/content/sections/rsvp-section-home.json
  - Définir type "cta", order 5, visible true
  - Ajouter title "Confirmez votre présence"
  - Ajouter description avec date limite 1er avril 2026
  - Ajouter CTA "Répondre maintenant" vers /rsvp
  - Définir variant "centered"
  - _Requirements: 7.1, 7.2, 7.3, 7.4_


- [x] 2.7 Créer galerie-home.json

  - Créer src/content/sections/galerie-home.json
  - Définir type "gallery", order 6, visible true
  - Ajouter title "Galerie photo"
  - Ajouter description "Les photos seront disponibles après le mariage"
  - Initialiser images comme array vide
  - _Requirements: 8.1, 8.2, 8.3, 8.4_
-

- [x] 3. Mettre à jour le schéma Content Collections




  - Modifier src/content/config.ts
  - Ajouter "gallery" dans l'enum type de sectionsCollection
  - Vérifier que tous les autres types sont présents
  - _Requirements: 11.1, 11.2_

- [x] 4. Créer la page galerie







- [x] 4.1 Créer galerie.astro

  - Créer src/pages/galerie.astro
  - Importer BaseLayout et getCollection
  - Charger les données de la section gallery depuis Content Collections
  - Utiliser BaseLayout avec title "Galerie - Ugo & Jeanne" et description appropriée
  - Afficher le titre et la description de la galerie
  - Créer un grid responsive (1/2/3 colonnes) pour les images
  - Afficher un message placeholder si aucune image n'est disponible
  - Ajouter loading="lazy" sur les images
  - Ajouter un effet hover (zoom) sur les images
  - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [x] 5. Intégrer le formulaire RSVP Tally





- [x] 5.1 Mettre à jour rsvp.astro


  - Modifier src/pages/rsvp.astro
  - Ajouter un titre "Confirmez votre présence"
  - Ajouter un texte avec la date limite (1er avril 2026)
  - Intégrer l'iframe Tally avec data-tally-src
  - Configurer les paramètres : alignLeft=1, hideTitle=1, transparentBackground=1
  - Définir width="100%" et height="800"
  - Définir frameborder="0", marginheight="0", marginwidth="0"
  - Ajouter title="RSVP Ugo & Jeanne" pour l'accessibilité
  - Ajouter loading="lazy" sur l'iframe
  - Ajouter le script Tally en async
  - Ajouter un wrapper avec styling (shadow, padding)

  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [x] 6. Mettre à jour le SEO et la navigation




- [x] 6.1 Mettre à jour BaseLayout.astro


  - Modifier src/layouts/BaseLayout.astro
  - Changer le titre par défaut en "Mariage d'Ugo Delassus & Jeanne Lauvergne – 27 juin 2026"
  - Changer la description par défaut en "Célébration provençale au Château de Campuget, Manduel"
  - Vérifier que lang="fr" est bien défini
  - Vérifier les meta tags Open Graph
  - _Requirements: 12.1, 12.2, 12.3, 12.4_

- [x] 6.2 Mettre à jour Navigation.astro


  - Modifier src/components/Navigation.astro
  - Ajouter un lien "Galerie" pointant vers /galerie
  - Placer le lien Galerie entre Hébergements et RSVP
  - Vérifier que tous les liens existants sont présents
  - Vérifier le highlight de la page active
  - _Requirements: 13.1, 13.2, 13.3_
-

- [x] 7. Vérifier et valider l'implémentation




  - Exécuter npm run build pour vérifier la compilation
  - Tester la navigation entre toutes les pages
  - Vérifier que toutes les sections s'affichent avec le contenu réel
  - Tester la responsivité sur mobile et desktop
  - Vérifier que les couleurs provençales sont appliquées
  - Tester le formulaire RSVP (chargement de l'iframe)
  - Vérifier l'accessibilité (navigation clavier, ARIA)
  - Vérifier les meta tags SEO dans le code source
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5_
