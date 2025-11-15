# Implementation Plan

- [x] 1. Supprimer la structure multilingue et les composants i18n





  - Supprimer complètement le dossier src/pages/en/
  - Supprimer complètement le dossier src/pages/fr/
  - Supprimer le composant src/components/LanguageSwitcher.astro
  - Supprimer les Content Collections multilingues (src/content/events/en/, src/content/events/fr/, src/content/pages/en/, src/content/pages/fr/)
  - _Requirements: 1.1, 1.2, 1.3_

- [x] 2. Nettoyer les sections et pages business





  - Supprimer src/components/sections/Team.astro
  - Supprimer src/components/sections/Domains.astro
  - Supprimer src/components/sections/Features.astro
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 3. Mettre à jour le schéma Content Collections





  - Modifier src/content/config.ts pour ajouter les nouveaux types de sections (story, programme, hebergements, infos-pratiques, rsvp-section)
  - Supprimer la collection events de config.ts
  - Simplifier le schéma pages en supprimant le champ lang
  - _Requirements: 8.1, 8.2, 8.3, 8.4_
-

- [x] 4. Créer les nouvelles sections mariage



- [x] 4.1 Créer Story.astro


  - Créer src/components/sections/Story.astro basé sur About.astro
  - Implémenter l'interface StoryProps avec support de timeline optionnelle
  - Utiliser les tokens CSS et Tailwind pour le styling
  - Assurer la responsivité et l'accessibilité
  - _Requirements: 3.1, 3.2, 3.6, 3.7, 3.8_

- [x] 4.2 Créer Programme.astro


  - Créer src/components/sections/Programme.astro
  - Implémenter l'interface ProgrammeProps avec support de schedule
  - Créer une timeline verticale responsive
  - Support de deux variantes (timeline et list)
  - _Requirements: 3.2, 3.6, 3.7, 3.8_

- [x] 4.3 Créer Hebergements.astro


  - Créer src/components/sections/Hebergements.astro
  - Implémenter l'interface HebergementsProps
  - Utiliser Card.astro pour afficher chaque hôtel
  - Créer un grid responsive (2 ou 3 colonnes)
  - _Requirements: 3.3, 3.6, 3.7, 3.8_

- [x] 4.4 Créer InfosPratiques.astro


  - Créer src/components/sections/InfosPratiques.astro
  - Implémenter l'interface InfosPratiquesProps
  - Support de layout flexible (grid ou list)
  - Support d'icônes optionnelles
  - _Requirements: 3.4, 3.6, 3.7, 3.8_

- [x] 4.5 Créer RSVPSection.astro


  - Créer src/components/sections/RSVPSection.astro basé sur CTA.astro
  - Implémenter l'interface RSVPSectionProps
  - Utiliser ButtonLink.astro pour le CTA
  - Support de variantes visuelles
  - _Requirements: 3.5, 3.6, 3.7, 3.8_
-

- [x] 5. Modifier les composants existants pour supprimer i18n





- [x] 5.1 Modifier Header.astro

  - Supprimer l'import et l'utilisation de LanguageSwitcher
  - Supprimer la prop alternateUrls
  - Simplifier l'interface HeaderProps (supprimer lang)
  - Mettre à jour le logo pour "Ugo & Jeanne"
  - Adapter les labels ARIA en français uniquement
  - _Requirements: 1.3, 1.4, 6.1, 6.2, 6.3_

- [x] 5.2 Modifier Navigation.astro


  - Supprimer la prop lang
  - Mettre à jour les liens de navigation (Accueil, Programme, Infos pratiques, Hébergements, RSVP)
  - Mettre à jour les URLs pour pointer vers la structure plate (/, /programme, /infos, /hebergements, /rsvp)
  - _Requirements: 1.1, 6.1, 6.3_

- [x] 5.3 Modifier Footer.astro


  - Supprimer la prop lang et toute logique multilingue
  - Simplifier le contenu (copyright, email de contact)
  - Supprimer les liens business
  - Simplifier ou supprimer les réseaux sociaux
  - _Requirements: 1.3, 1.4, 7.1, 7.2, 7.3, 7.4_

- [x] 5.4 Modifier BaseLayout.astro


  - Supprimer la prop alternateUrls
  - Fixer la prop lang à 'fr' par défaut
  - Supprimer toutes les balises <link rel="alternate" hreflang="...">
  - Supprimer la logique og:locale:alternate
  - Simplifier les meta tags
  - _Requirements: 1.4, 1.5_

- [x] 6. Créer les fichiers Content Collections avec placeholders




  - Créer src/content/sections/hero-home.json avec structure de base
  - Créer src/content/sections/story-home.json avec structure de base
  - Créer src/content/sections/programme-home.json avec structure de base
  - Créer src/content/sections/infos-home.json avec structure de base
  - Créer src/content/sections/hebergements-home.json avec structure de base
  - Créer src/content/sections/rsvp-section-home.json avec structure de base
  - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [x] 7. Créer les pages du site






- [x] 7.1 Créer la page d'accueil

  - Créer src/pages/index.astro
  - Importer et utiliser BaseLayout
  - Charger les sections depuis Content Collections
  - Afficher Hero, Story, Programme, InfosPratiques, Hebergements, RSVPSection dans l'ordre
  - Configurer les meta tags SEO appropriés
  - _Requirements: 4.1, 4.2, 4.3_



- [x] 7.2 Créer la page Programme

  - Créer src/pages/programme.astro
  - Utiliser BaseLayout avec meta tags appropriés
  - Charger et afficher la section Programme
  - _Requirements: 5.1, 5.2, 5.3_


- [x] 7.3 Créer la page Hébergements

  - Créer src/pages/hebergements.astro
  - Utiliser BaseLayout avec meta tags appropriés
  - Charger et afficher la section Hebergements
  - _Requirements: 5.1, 5.2, 5.3_


- [x] 7.4 Créer la page Infos pratiques

  - Créer src/pages/infos.astro
  - Utiliser BaseLayout avec meta tags appropriés
  - Charger et afficher la section InfosPratiques
  - _Requirements: 5.1, 5.2, 5.3_


- [x] 7.5 Créer la page RSVP

  - Créer src/pages/rsvp.astro avec structure de base
  - Utiliser BaseLayout avec meta tags appropriés
  - Ajouter un placeholder pour le formulaire RSVP (à implémenter en Phase 2)
  - _Requirements: 5.1, 5.2, 5.3_
-

- [x] 8. Vérifier et valider l'implémentation




  - Compiler le projet et vérifier qu'il n'y a pas d'erreurs TypeScript
  - Tester la navigation entre toutes les pages
  - Vérifier que toutes les sections s'affichent correctement
  - Vérifier la responsivité sur mobile et desktop
  - Valider l'accessibilité (navigation clavier, ARIA labels)
  - _Requirements: All_
