# Requirements Document

## Introduction

Ce document définit les exigences pour la Phase 2 du site de mariage Ugo & Jeanne : le remplissage complet du contenu réel, la personnalisation visuelle avec la palette provençale, l'intégration du formulaire RSVP Tally, et la finalisation complète du site pour le déploiement.

## Glossary

- **System**: Le site web de mariage Ugo & Jeanne
- **Content Collection**: Système de gestion de contenu d'Astro
- **Token**: Variable CSS définissant l'identité visuelle
- **Tally**: Service de formulaires en ligne pour le RSVP
- **Hero**: Section principale en haut de page
- **CTA**: Call-to-action, bouton d'appel à l'action

## Requirements

### Requirement 1

**User Story:** En tant que développeur, je veux mettre à jour les tokens CSS avec la palette provençale, afin que le site reflète l'ambiance douce et élégante du mariage.

#### Acceptance Criteria

1. THE System SHALL use #A3B18A (sauge) as the primary brand color
2. THE System SHALL use #8FA47B as the primary hover color
3. THE System SHALL use #DCD2C8 (beige pierre) as the secondary brand color
4. THE System SHALL use #FAF7F2 (blanc provençal) as the accent color
5. THE System SHALL use #F2EDE6 as the accent hover color
6. THE System SHALL use #1A1A1A as the main text color
7. THE System SHALL use #6B7280 as the muted text color
8. THE System SHALL maintain existing shadow and radius values for consistency

### Requirement 2

**User Story:** En tant que développeur, je veux créer le fichier hero-home.json avec le contenu réel, afin d'afficher les informations principales du mariage sur la page d'accueil.

#### Acceptance Criteria

1. THE System SHALL include "Ugo & Jeanne" as the hero title
2. THE System SHALL include "Nous nous marions" as the hero subtitle
3. THE System SHALL include "27 juin 2026" as the wedding date
4. THE System SHALL include a button labeled "Confirmer ma présence" linking to /rsvp
5. THE System SHALL use type "hero" with order 0 and visible true

### Requirement 3

**User Story:** En tant que développeur, je veux créer le fichier story-home.json avec l'histoire du couple, afin de partager leur parcours avec les invités.

#### Acceptance Criteria

1. THE System SHALL include "Notre histoire" as the story title
2. THE System SHALL include a text describing how Ugo Delassus and Jeanne Lauvergne met and their journey
3. THE System SHALL mention the wedding date of June 27, 2026
4. THE System SHALL reference the Provençal atmosphere and celebration with loved ones
5. THE System SHALL use type "story" with order 1 and visible true

### Requirement 4

**User Story:** En tant que développeur, je veux créer le fichier programme-home.json avec le programme détaillé, afin que les invités connaissent le déroulement de la journée.

#### Acceptance Criteria

1. THE System SHALL include "Programme" as the section title
2. THE System SHALL include a ceremony event at 14h30 at Cathédrale de Nîmes
3. THE System SHALL include a cocktail event at 18h00 at Château de Campuget, Manduel
4. THE System SHALL include a dinner event at 20h30 at Château de Campuget, Manduel
5. THE System SHALL use type "programme" with order 2 and visible true

### Requirement 5

**User Story:** En tant que développeur, je veux créer le fichier hebergements-home.json avec les recommandations d'hébergement, afin d'aider les invités à trouver où dormir.

#### Acceptance Criteria

1. THE System SHALL include "Hébergements recommandés" as the section title
2. THE System SHALL include Château de Campuget as an on-site accommodation option
3. THE System SHALL include Hôtel Le Président in Bellegarde as a nearby option
4. THE System SHALL include Domaine des Clos in Beaucaire as a peaceful nearby option
5. THE System SHALL use type "hebergements" with order 3 and visible true

### Requirement 6

**User Story:** En tant que développeur, je veux créer le fichier infos-home.json avec les informations pratiques, afin de fournir tous les détails logistiques aux invités.

#### Acceptance Criteria

1. THE System SHALL include "Informations pratiques" as the section title
2. THE System SHALL include an "Accès" section describing ceremony location at Cathédrale de Nîmes and reception at Château de Campuget
3. THE System SHALL include a "Parking" section mentioning on-site parking at Château de Campuget
4. THE System SHALL include a "Météo" section warning about hot June weather in Nîmes and suggesting hydration and sun protection
5. THE System SHALL use type "infos" with order 4 and visible true

### Requirement 7

**User Story:** En tant que développeur, je veux créer le fichier rsvp-section-home.json avec le CTA RSVP, afin d'encourager les invités à confirmer leur présence.

#### Acceptance Criteria

1. THE System SHALL include "Confirmez votre présence" as the CTA title
2. THE System SHALL include text mentioning the deadline of April 1, 2026
3. THE System SHALL include a button labeled "Répondre maintenant" linking to /rsvp
4. THE System SHALL use type "cta" with order 5 and visible true

### Requirement 8

**User Story:** En tant que développeur, je veux créer le fichier galerie-home.json pour la future galerie photo, afin de préparer l'espace pour les photos après le mariage.

#### Acceptance Criteria

1. THE System SHALL include "Galerie photo" as the section title
2. THE System SHALL include text stating "Les photos seront disponibles après le mariage"
3. THE System SHALL include an empty images array
4. THE System SHALL use type "gallery" with order 6 and visible true

### Requirement 9

**User Story:** En tant que développeur, je veux intégrer le formulaire Tally dans la page RSVP, afin que les invités puissent confirmer leur présence en ligne.

#### Acceptance Criteria

1. THE System SHALL include a Tally iframe in the rsvp.astro page
2. WHEN rendering the Tally iframe, THE System SHALL use alignLeft=1, hideTitle=1, and transparentBackground=1 parameters
3. THE System SHALL set the iframe width to 100% and height to 800px
4. THE System SHALL include the Tally embed script asynchronously
5. THE System SHALL use "RSVP Ugo & Jeanne" as the iframe title for accessibility

### Requirement 10

**User Story:** En tant que développeur, je veux créer une page galerie.astro, afin de préparer l'espace pour afficher les photos du mariage.

#### Acceptance Criteria

1. THE System SHALL include a galerie.astro page in src/pages/
2. THE System SHALL use BaseLayout with appropriate SEO metadata
3. THE System SHALL load gallery content from Content Collections
4. THE System SHALL display a message when no photos are available yet

### Requirement 11

**User Story:** En tant que développeur, je veux mettre à jour le schéma Content Collections pour supporter le type gallery, afin de gérer la galerie photo.

#### Acceptance Criteria

1. THE System SHALL include "gallery" in the type enum of the sections collection schema
2. THE System SHALL maintain compatibility with existing section types

### Requirement 12

**User Story:** En tant que développeur, je veux mettre à jour BaseLayout avec les métadonnées SEO du mariage, afin d'optimiser le référencement du site.

#### Acceptance Criteria

1. THE System SHALL use "Mariage d'Ugo Delassus & Jeanne Lauvergne – 27 juin 2026" as the default title
2. THE System SHALL use "Célébration provençale au Château de Campuget, Manduel" as the default description
3. THE System SHALL maintain the lang="fr" attribute
4. THE System SHALL include appropriate Open Graph metadata

### Requirement 13

**User Story:** En tant que développeur, je veux mettre à jour la navigation pour inclure la page Galerie, afin que les invités puissent accéder aux photos.

#### Acceptance Criteria

1. THE System SHALL include a "Galerie" navigation link pointing to /galerie
2. THE System SHALL maintain existing navigation links (Accueil, Programme, Infos pratiques, Hébergements, RSVP)
3. THE System SHALL highlight the active page in the navigation

### Requirement 14

**User Story:** En tant que développeur, je veux vérifier que le site compile et fonctionne correctement, afin de garantir qu'il est prêt pour le déploiement.

#### Acceptance Criteria

1. WHEN running npm run build, THE System SHALL compile without errors
2. WHEN navigating between pages, THE System SHALL load all pages correctly
3. WHEN viewing on mobile and desktop, THE System SHALL display responsively
4. WHEN testing accessibility, THE System SHALL support keyboard navigation and screen readers
5. THE System SHALL display all sections with real content on the homepage
