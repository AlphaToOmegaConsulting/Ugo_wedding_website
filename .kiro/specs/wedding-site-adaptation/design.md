# Design Document

## Overview

Ce document décrit l'architecture et le design pour l'adaptation du template Alpha WebCore en site de mariage pour Ugo & Jeanne. La transformation implique la suppression du système i18n, le nettoyage des sections business, et la création de nouvelles sections spécifiques au mariage, tout en préservant l'architecture solide du template existant.

### Objectifs principaux

1. Simplifier le template en supprimant toute complexité multilingue
2. Remplacer les sections business par des sections adaptées à un événement de mariage
3. Maintenir la qualité du code, l'accessibilité et les performances
4. Préserver le système de tokens CSS pour une personnalisation future

## Architecture

### Structure de fichiers simplifiée

```
src/
├── components/
│   ├── primitives/           # Inchangé - 5 composants de base
│   │   ├── Button.astro
│   │   ├── ButtonLink.astro
│   │   ├── Card.astro
│   │   ├── Dialog.astro
│   │   └── Input.astro
│   ├── sections/             # Modifié - sections mariage
│   │   ├── Hero.astro        # Conservé
│   │   ├── Story.astro       # Nouveau - Notre histoire
│   │   ├── Programme.astro   # Nouveau - Horaire du mariage
│   │   ├── Hebergements.astro # Nouveau - Hôtels recommandés
│   │   ├── InfosPratiques.astro # Nouveau - Infos pratiques
│   │   ├── RSVPSection.astro # Nouveau - CTA vers RSVP
│   │   ├── CTA.astro         # Conservé (peut être utilisé)
│   │   └── About.astro       # Conservé (base pour Story)
│   ├── Header.astro          # Modifié - navigation simplifiée
│   ├── Footer.astro          # Modifié - footer simplifié
│   └── Navigation.astro      # Modifié - liens mariage
├── content/
│   ├── config.ts             # Modifié - nouveaux types de sections
│   ├── sections/             # Modifié - contenu mariage
│   │   ├── hero-home.json
│   │   ├── story-home.json
│   │   ├── programme-home.json
│   │   ├── infos-home.json
│   │   ├── hebergements-home.json
│   │   └── rsvp-section-home.json
│   └── pages/                # Simplifié - plus de sous-dossiers lang
│       ├── home.md
│       ├── programme.md
│       ├── hebergements.md
│       ├── infos.md
│       └── rsvp.md
├── layouts/
│   └── BaseLayout.astro      # Modifié - suppression hreflang
├── pages/                    # Simplifié - structure plate
│   ├── index.astro
│   ├── programme.astro
│   ├── hebergements.astro
│   ├── infos.astro
│   └── rsvp.astro
├── styles/
│   ├── tokens.css            # Inchangé (Phase 1)
│   └── global.css            # Inchangé
└── utils/
    └── date-formatter.ts     # Conservé
```

### Changements architecturaux clés

1. **Suppression de la structure multilingue**: `/fr/` et `/en/` → structure plate dans `/pages/`
2. **Suppression des composants i18n**: LanguageSwitcher.astro supprimé
3. **Remplacement des sections business**: Team, Domains, Features → sections mariage
4. **Simplification du BaseLayout**: Suppression de la logique hreflang et alternateUrls
5. **Navigation simplifiée**: Menu adapté au contexte mariage

## Components and Interfaces

### 1. Nouvelles sections mariage

#### Story.astro (Notre histoire)

Basé sur About.astro, adapté pour raconter l'histoire du couple.

```typescript
interface StoryProps {
  title: string;
  content: string;
  image?: {
    src: string;
    alt: string;
    position?: 'left' | 'right';
  };
  timeline?: Array<{
    year: string;
    event: string;
  }>;
  class?: string;
}
```

**Design decisions:**
- Réutilise la structure d'About.astro pour cohérence
- Remplace les stats par une timeline optionnelle (dates importantes)
- Support d'une image du couple avec positionnement flexible
- Utilise les tokens CSS existants pour les couleurs

#### Programme.astro (Horaire du mariage)

Section affichant le déroulement de la journée.

```typescript
interface ProgrammeProps {
  title: string;
  subtitle?: string;
  schedule: Array<{
    time: string;
    event: string;
    description?: string;
    location?: string;
  }>;
  variant?: 'timeline' | 'list';
  class?: string;
}
```

**Design decisions:**
- Format timeline vertical pour clarté
- Chaque événement avec heure, titre, description optionnelle
- Support de deux variantes visuelles (timeline ou liste)
- Responsive avec adaptation mobile

#### Hebergements.astro (Hôtels recommandés)

Section listant les options d'hébergement.

```typescript
interface HebergementsProps {
  title: string;
  subtitle?: string;
  hotels: Array<{
    name: string;
    address: string;
    distance?: string;
    phone?: string;
    website?: string;
    description?: string;
    image?: string;
  }>;
  columns?: 2 | 3;
  class?: string;
}
```

**Design decisions:**
- Utilise Card.astro pour chaque hôtel
- Grid responsive (2 ou 3 colonnes)
- Informations essentielles: nom, adresse, distance, contact
- Liens externes vers sites d'hôtels

#### InfosPratiques.astro (Informations pratiques)

Section pour transport, dress code, parking, etc.

```typescript
interface InfosPratiquesProps {
  title: string;
  subtitle?: string;
  sections: Array<{
    icon?: string;
    title: string;
    content: string;
  }>;
  layout?: 'grid' | 'list';
  columns?: 2 | 3;
  class?: string;
}
```

**Design decisions:**
- Layout flexible (grid ou liste)
- Support d'icônes optionnelles pour chaque section
- Contenu HTML pour formatage riche
- Adapté pour différents types d'infos (transport, dress code, etc.)

#### RSVPSection.astro (Call-to-action RSVP)

Section CTA pour encourager les réponses.

```typescript
interface RSVPSectionProps {
  title: string;
  description?: string;
  cta: {
    label: string;
    href: string;
  };
  deadline?: string;
  variant?: 'default' | 'centered';
  class?: string;
}
```

**Design decisions:**
- Basé sur CTA.astro existant
- Affichage optionnel de la date limite de réponse
- Utilise ButtonLink.astro pour le CTA
- Variantes visuelles pour différents contextes

### 2. Composants modifiés

#### Header.astro

**Modifications:**
- Suppression de LanguageSwitcher
- Suppression de la prop `alternateUrls`
- Suppression de la prop `lang` (toujours 'fr')
- Navigation simplifiée: Accueil, Programme, Infos pratiques, Hébergements, RSVP
- Logo remplacé par "Ugo & Jeanne" (ou personnalisable)

```typescript
interface HeaderProps {
  currentPath?: string;
}
```

#### Footer.astro

**Modifications:**
- Suppression de la prop `lang`
- Suppression des liens business
- Footer simplifié: copyright, email de contact
- Suppression des réseaux sociaux (optionnel selon besoins)

```typescript
interface FooterProps {
  contactEmail?: string;
}
```

#### Navigation.astro

**Modifications:**
- Suppression de la prop `lang`
- Nouveaux liens de navigation:
  - Accueil → `/`
  - Programme → `/programme`
  - Infos pratiques → `/infos`
  - Hébergements → `/hebergements`
  - RSVP → `/rsvp`

```typescript
interface NavigationProps {
  currentPath?: string;
  mobile?: boolean;
  class?: string;
}
```

#### BaseLayout.astro

**Modifications:**
- Suppression de la prop `alternateUrls`
- Prop `lang` fixée à 'fr' par défaut
- Suppression de toutes les balises `<link rel="alternate" hreflang="...">`
- Suppression de la logique `og:locale:alternate`
- Simplification des meta tags

```typescript
interface BaseLayoutProps {
  title: string;
  description: string;
  ogImage?: string;
  noindex?: boolean;
}
```

## Data Models

### Content Collections Schema

#### Sections Collection (modifié)

```typescript
const sectionsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    type: z.enum([
      'hero',
      'story',
      'programme',
      'hebergements',
      'infos-pratiques',
      'rsvp-section',
      'cta',
      'about'
    ]),
    order: z.number(),
    visible: z.boolean().default(true),
    data: z.any(), // Pragmatic approach maintained
  }),
});
```

#### Pages Collection (simplifié)

```typescript
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    seo: z.object({
      ogImage: z.string().optional(),
      noindex: z.boolean().default(false),
    }).optional(),
  }),
});
// Note: lang field removed
```

#### Events Collection (supprimé)

La collection events n'est plus nécessaire pour un site de mariage. Elle sera supprimée.

### Content Collection Files (placeholders Phase 1)

#### hero-home.json
```json
{
  "type": "hero",
  "order": 1,
  "visible": true,
  "data": {
    "title": "Ugo & Jeanne",
    "subtitle": "Nous nous marions !",
    "cta": {
      "label": "Confirmer votre présence",
      "href": "/rsvp"
    },
    "variant": "centered"
  }
}
```

#### story-home.json
```json
{
  "type": "story",
  "order": 2,
  "visible": true,
  "data": {
    "title": "Notre histoire",
    "content": "<p>Contenu à définir en Phase 2</p>",
    "image": {
      "src": "/images/couple.jpg",
      "alt": "Ugo et Jeanne",
      "position": "right"
    }
  }
}
```

#### programme-home.json
```json
{
  "type": "programme",
  "order": 3,
  "visible": true,
  "data": {
    "title": "Programme de la journée",
    "schedule": [
      {
        "time": "14h00",
        "event": "Cérémonie",
        "location": "À définir"
      }
    ]
  }
}
```

#### infos-home.json
```json
{
  "type": "infos-pratiques",
  "order": 4,
  "visible": true,
  "data": {
    "title": "Informations pratiques",
    "sections": [
      {
        "title": "Transport",
        "content": "<p>À définir en Phase 2</p>"
      }
    ]
  }
}
```

#### hebergements-home.json
```json
{
  "type": "hebergements",
  "order": 5,
  "visible": true,
  "data": {
    "title": "Où dormir",
    "hotels": []
  }
}
```

#### rsvp-section-home.json
```json
{
  "type": "rsvp-section",
  "order": 6,
  "visible": true,
  "data": {
    "title": "Confirmez votre présence",
    "description": "Merci de nous confirmer votre présence avant le [date]",
    "cta": {
      "label": "Répondre",
      "href": "/rsvp"
    }
  }
}
```

## Pages Structure

### index.astro (Page d'accueil)

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/sections/Hero.astro';
import Story from '../components/sections/Story.astro';
import Programme from '../components/sections/Programme.astro';
import InfosPratiques from '../components/sections/InfosPratiques.astro';
import Hebergements from '../components/sections/Hebergements.astro';
import RSVPSection from '../components/sections/RSVPSection.astro';

// Fetch sections
const allSections = await getCollection('sections');
const homeSections = allSections
  .filter(s => s.id.includes('home') && s.data.visible)
  .sort((a, b) => a.data.order - b.data.order);

// Get section data by type
const getSectionData = (type: string) => {
  return homeSections.find(s => s.data.type === type)?.data.data;
};

const heroData = getSectionData('hero');
const storyData = getSectionData('story');
const programmeData = getSectionData('programme');
const infosData = getSectionData('infos-pratiques');
const hebergementsData = getSectionData('hebergements');
const rsvpData = getSectionData('rsvp-section');
---

<BaseLayout
  title="Ugo & Jeanne - Mariage"
  description="Nous nous marions ! Retrouvez toutes les informations sur notre mariage."
>
  {heroData && <Hero {...heroData} />}
  {storyData && <Story {...storyData} />}
  {programmeData && <Programme {...programmeData} />}
  {infosData && <InfosPratiques {...infosData} />}
  {hebergementsData && <Hebergements {...hebergementsData} />}
  {rsvpData && <RSVPSection {...rsvpData} />}
</BaseLayout>
```

### programme.astro

Page dédiée au programme détaillé.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Programme from '../components/sections/Programme.astro';
import { getCollection } from 'astro:content';

const programmeData = (await getCollection('sections'))
  .find(s => s.data.type === 'programme')?.data.data;
---

<BaseLayout
  title="Programme - Ugo & Jeanne"
  description="Programme détaillé de notre mariage"
>
  {programmeData && <Programme {...programmeData} />}
</BaseLayout>
```

### hebergements.astro

Page dédiée aux hébergements.

### infos.astro

Page dédiée aux informations pratiques.

### rsvp.astro

Page avec formulaire RSVP (formulaire à implémenter en Phase 2).

## Error Handling

### Gestion des sections manquantes

```typescript
// Pattern utilisé dans toutes les pages
const sectionData = getSectionData('type');
// Render conditionnel
{sectionData && <Component {...sectionData} />}
```

Si une section n'est pas trouvée dans les Content Collections, elle n'est simplement pas affichée. Pas d'erreur bloquante.

### Validation des données

- Le schéma Content Collections utilise `z.any()` pour `data` (approche pragmatique)
- Chaque composant valide ses props via TypeScript
- Les props optionnelles ont des valeurs par défaut

### Gestion des images manquantes

```astro
{image && (
  <img
    src={image.src}
    alt={image.alt}
    loading="lazy"
    decoding="async"
  />
)}
```

Toutes les images sont optionnelles et conditionnellement rendues.

## Testing Strategy

### Tests à maintenir

1. **Tests E2E (Playwright)**
   - Navigation entre les pages
   - Accessibilité (focus, ARIA)
   - Responsive design

2. **Lighthouse Audit**
   - Performance
   - Accessibilité
   - SEO
   - Best practices

3. **Tests d'accessibilité**
   - Script a11y-audit existant
   - Vérification des contrastes
   - Navigation clavier

### Tests à adapter

1. **Tests de navigation**
   - Mettre à jour les URLs (plus de `/fr/` ou `/en/`)
   - Vérifier les nouveaux liens de navigation

2. **Tests de contenu**
   - Vérifier le chargement des nouvelles sections
   - Valider l'affichage conditionnel

### Tests à supprimer

1. Tests du LanguageSwitcher
2. Tests des routes multilingues
3. Tests des sections business (Team, Domains)

## Migration Strategy

### Phase 1: Suppression et nettoyage

1. Supprimer `/src/pages/en/` et `/src/pages/fr/`
2. Supprimer `LanguageSwitcher.astro`
3. Supprimer sections business: `Team.astro`, `Domains.astro`, `Features.astro`
4. Supprimer Content Collections events

### Phase 2: Création des nouvelles sections

1. Créer les 5 nouvelles sections mariage
2. Créer les fichiers Content Collections (placeholders)
3. Mettre à jour `config.ts`

### Phase 3: Adaptation des composants existants

1. Modifier `Header.astro`
2. Modifier `Footer.astro`
3. Modifier `Navigation.astro`
4. Modifier `BaseLayout.astro`

### Phase 4: Création des pages

1. Créer `index.astro` à la racine de `/pages/`
2. Créer les pages secondaires
3. Supprimer l'ancien `index.astro` (redirect)

### Phase 5: Validation

1. Vérifier la compilation
2. Tester la navigation
3. Vérifier l'accessibilité
4. Valider le SEO

## Design Decisions Rationale

### Pourquoi conserver About.astro ?

About.astro sert de base pour Story.astro. Il peut être conservé pour d'autres usages futurs ou supprimé après création de Story.astro.

### Pourquoi ne pas modifier tokens.css en Phase 1 ?

Les tokens CSS définissent l'identité visuelle. En Phase 1, on se concentre sur la structure. La personnalisation des couleurs sera faite en Phase 2 avec la palette du mariage.

### Pourquoi utiliser z.any() pour les sections ?

Approche pragmatique du template original. Chaque section a des besoins différents. La validation stricte serait trop rigide pour un site simple.

### Pourquoi créer des pages dédiées en plus de la page d'accueil ?

- Meilleur SEO (URLs spécifiques)
- Navigation plus claire
- Possibilité d'ajouter plus de détails sur chaque page
- Flexibilité pour l'évolution du site

### Pourquoi conserver les primitives inchangées ?

Les 5 composants primitives (Button, Card, etc.) sont génériques et parfaitement adaptés à un site de mariage. Pas besoin de les modifier.
