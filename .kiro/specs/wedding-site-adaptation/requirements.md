# Requirements Document

## Introduction

Ce document définit les exigences pour l'adaptation du template Alpha WebCore en un site de mariage pour Ugo & Jeanne. Le projet consiste à transformer un template multilingue orienté business en un site monolingue français, simple et élégant, dédié à un événement de mariage.

## Glossary

- **System**: Le site web de mariage Ugo & Jeanne
- **Template**: Le template Alpha WebCore existant
- **i18n**: Système d'internationalisation (multilingue)
- **Content Collection**: Système de gestion de contenu d'Astro
- **Section**: Composant de page réutilisable (Hero, About, etc.)
- **Primitive**: Composant UI de base (Button, Card, etc.)
- **Token**: Variable CSS définissant l'identité visuelle
- **BaseLayout**: Layout principal du site avec SEO

## Requirements

### Requirement 1

**User Story:** En tant que développeur, je veux supprimer complètement le système i18n du template, afin d'obtenir un site 100% monolingue français sans complexité inutile.

#### Acceptance Criteria

1. WHEN the System is built, THE System SHALL contain no English language routes or pages
2. WHEN the System is built, THE System SHALL contain all page content directly in the src/pages/ directory without language subdirectories
3. THE System SHALL not include the LanguageSwitcher component in any layout or page
4. THE System SHALL not include hreflang alternate language links in the BaseLayout component
5. WHEN the System renders any page, THE System SHALL use lang="fr" as the default and only language attribute

### Requirement 2

**User Story:** En tant que développeur, je veux nettoyer toutes les sections et pages business du template, afin de partir d'une base propre adaptée à un site de mariage.

#### Acceptance Criteria

1. THE System SHALL not include the Team section component
2. THE System SHALL not include the Domains section component
3. THE System SHALL not include the Features section component
4. THE System SHALL not include any team-related pages in the routing structure
5. THE System SHALL not include any domains-related pages in the routing structure
6. THE System SHALL not include any Content Collections related to team or domains data

### Requirement 3

**User Story:** En tant que développeur, je veux créer les sections spécifiques au mariage, afin de pouvoir construire les pages du site avec du contenu approprié.

#### Acceptance Criteria

1. THE System SHALL include a Story section component for displaying the couple's story
2. THE System SHALL include a Programme section component for displaying the wedding schedule
3. THE System SHALL include a Hebergements section component for displaying recommended hotels
4. THE System SHALL include an InfosPratiques section component for displaying practical information
5. THE System SHALL include an RSVPSection component for call-to-action to the RSVP page
6. WHEN creating new sections, THE System SHALL follow the same structure and patterns as existing sections
7. WHEN creating new sections, THE System SHALL use Tailwind CSS classes and token variables for styling
8. WHEN creating new sections, THE System SHALL accept props for configuration and content

### Requirement 4

**User Story:** En tant que développeur, je veux adapter la page d'accueil pour afficher les sections de mariage, afin de présenter toutes les informations importantes sur une seule page.

#### Acceptance Criteria

1. THE System SHALL include an index.astro page that displays Hero, Story, Programme, InfosPratiques, Hebergements, and RSVPSection components in order
2. THE System SHALL load section content from Content Collections when available
3. THE System SHALL use BaseLayout for the index page with appropriate SEO metadata

### Requirement 5

**User Story:** En tant que développeur, je veux créer les pages secondaires du site de mariage, afin de fournir des informations détaillées sur chaque aspect de l'événement.

#### Acceptance Criteria

1. THE System SHALL include a programme.astro page displaying the detailed wedding schedule
2. THE System SHALL include a hebergements.astro page displaying accommodation options
3. THE System SHALL include an infos.astro page displaying practical information
4. THE System SHALL include an rsvp.astro page for guest responses
5. WHEN rendering secondary pages, THE System SHALL use BaseLayout with appropriate metadata
6. WHEN rendering secondary pages, THE System SHALL load content from Content Collections where applicable

### Requirement 6

**User Story:** En tant que développeur, je veux adapter le Header avec une navigation simplifiée pour le site de mariage, afin de faciliter l'accès aux différentes sections.

#### Acceptance Criteria

1. THE System SHALL include navigation links for Accueil, Programme, Infos pratiques, Hébergements, and RSVP in the Header
2. THE System SHALL not include language switching functionality in the Header
3. THE System SHALL not include any business-related navigation items in the Header
4. WHEN rendering the Header, THE System SHALL highlight the current active page

### Requirement 7

**User Story:** En tant que développeur, je veux simplifier le Footer pour le site de mariage, afin d'afficher uniquement les informations essentielles.

#### Acceptance Criteria

1. THE System SHALL include a simplified Footer with copyright information
2. THE System SHALL include a contact email placeholder in the Footer
3. THE System SHALL not include language switching functionality in the Footer
4. THE System SHALL not include complex business-related footer sections

### Requirement 8

**User Story:** En tant que développeur, je veux créer les Content Collections nécessaires pour le site de mariage, afin de gérer le contenu de manière structurée.

#### Acceptance Criteria

1. THE System SHALL include Content Collection entries for hero, story, programme, infos-pratiques, hebergements, and rsvp-section
2. WHEN creating Content Collection entries, THE System SHALL use placeholder content with the correct schema structure
3. THE System SHALL include type, order, and visible fields in each Content Collection entry
4. THE System SHALL include a data field compatible with the existing Content Collection schema

### Requirement 9

**User Story:** En tant que développeur, je veux préserver le système de tokens CSS existant, afin de pouvoir personnaliser les couleurs du site dans une phase ultérieure.

#### Acceptance Criteria

1. THE System SHALL not modify the tokens.css file during the adaptation phase
2. THE System SHALL continue to use existing token variables in all components
3. THE System SHALL maintain compatibility with the 10-token system for future customization
