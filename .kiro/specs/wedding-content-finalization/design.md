# Design Document

## Overview

Ce document décrit l'approche de design pour la Phase 2 du site de mariage Ugo & Jeanne : remplissage du contenu réel, personnalisation visuelle avec la palette provençale, intégration du formulaire RSVP, et finalisation complète du site.

### Objectifs principaux

1. Appliquer la palette de couleurs provençale (sauge, beige pierre, blanc provençal)
2. Remplir tous les fichiers Content Collections avec le contenu réel du mariage
3. Intégrer le formulaire RSVP via Tally
4. Créer la page galerie pour les photos futures
5. Optimiser le SEO avec les métadonnées du mariage
6. Valider le fonctionnement complet du site

## Architecture

### Structure des fichiers (Phase 2)

```
src/
├── content/
│   ├── sections/
│   │   ├── hero-home.json          # ✓ Contenu réel
│   │   ├── story-home.json         # ✓ Contenu réel
│   │   ├── programme-home.json     # ✓ Contenu réel
│   │   ├── hebergements-home.json  # ✓ Contenu réel
│   │   ├── infos-home.json         # ✓ Contenu réel
│   │   ├── rsvp-section-home.json  # ✓ Contenu réel
│   │   └── galerie-home.json       # ✓ Nouveau
│   └── config.ts                   # ✓ Ajout type "gallery"
├── pages/
│   ├── index.astro                 # ✓ Déjà créé
│   ├── programme.astro             # ✓ Déjà créé
│   ├── hebergements.astro          # ✓ Déjà créé
│   ├── infos.astro                 # ✓ Déjà créé
│   ├── rsvp.astro                  # ✓ À mettre à jour avec Tally
│   └── galerie.astro               # ✓ Nouveau
├── styles/
│   └── tokens.css                  # ✓ À mettre à jour avec palette provençale
├── layouts/
│   └── BaseLayout.astro            # ✓ À mettre à jour avec SEO
└── components/
    └── Navigation.astro            # ✓ À mettre à jour avec lien Galerie
```

## Components and Interfaces

### 1. Palette de couleurs provençale

#### tokens.css

```css
:root {
  /* Palette provençale */
  --brand-primary: #A3B18A;        /* Sauge - couleur principale */
  --brand-primary-hover: #8FA47B;  /* Sauge foncé - hover */
  --brand-secondary: #DCD2C8;      /* Beige pierre - accents */
  --brand-accent: #FAF7F2;         /* Blanc provençal - backgrounds */
  --brand-accent-hover: #F2EDE6;   /* Blanc provençal foncé - hover */
  
  /* Texte */
  --color-text: #1A1A1A;           /* Texte principal */
  --color-text-muted: #6B7280;     /* Texte secondaire */
  
  /* Backgrounds */
  --color-bg: #ffffff;             /* Background principal */
  --color-bg-alt: #fafaf9;         /* Background alternatif */
  
  /* Effets */
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  --radius: 0.5rem;
}
```

**Design rationale:**
- Sauge (#A3B18A) : couleur apaisante, naturelle, évoque la Provence
- Beige pierre (#DCD2C8) : élégance, douceur, rappelle les mas provençaux
- Blanc provençal (#FAF7F2) : luminosité, pureté, contraste doux
- Texte sombre (#1A1A1A) : lisibilité optimale sur fonds clairs

### 2. Content Collections - Contenu réel

#### hero-home.json

```json
{
  "type": "hero",
  "order": 0,
  "visible": true,
  "data": {
    "title": "Ugo & Jeanne",
    "subtitle": "Nous nous marions",
    "date": "27 juin 2026",
    "image": "/hero-couple.jpg",
    "cta": {
      "label": "Confirmer ma présence",
      "href": "/rsvp"
    },
    "variant": "centered"
  }
}
```

**Design decisions:**
- Titre simple et élégant avec les prénoms
- Date visible immédiatement
- CTA clair vers le RSVP
- Image placeholder (à remplacer par vraie photo)

#### story-home.json

```json
{
  "type": "story",
  "order": 1,
  "visible": true,
  "data": {
    "title": "Notre histoire",
    "content": "<p>Ugo Delassus et Jeanne Lauvergne se marient le 27 juin 2026.</p><p>Leur histoire commence dans le Sud, entre soleil, rires et complicité, et les mène aujourd'hui à célébrer leur union entourés de leurs proches, dans une ambiance provençale chaleureuse.</p>"
  }
}
```

**Design decisions:**
- Texte court et poétique
- Mention du Sud et de la Provence
- Ton chaleureux et personnel
- HTML pour formatage (paragraphes)

#### programme-home.json

```json
{
  "type": "programme",
  "order": 2,
  "visible": true,
  "data": {
    "title": "Programme",
    "schedule": [
      {
        "time": "14h30",
        "event": "Cérémonie",
        "description": "Cathédrale de Nîmes"
      },
      {
        "time": "18h00",
        "event": "Cocktail",
        "description": "Château de Campuget – Manduel"
      },
      {
        "time": "20h30",
        "event": "Dîner",
        "description": "Château de Campuget – Manduel"
      }
    ],
    "variant": "timeline"
  }
}
```

**Design decisions:**
- Timeline claire avec heures précises
- Lieux explicites pour chaque événement
- Variante timeline pour visualisation verticale
- 3 moments clés : cérémonie, cocktail, dîner

#### hebergements-home.json

```json
{
  "type": "hebergements",
  "order": 3,
  "visible": true,
  "data": {
    "title": "Hébergements recommandés",
    "hotels": [
      {
        "name": "Château de Campuget",
        "description": "Sur place, au cœur du domaine.",
        "distance": "0 km"
      },
      {
        "name": "Hôtel Le Président",
        "description": "Bellegarde – À quelques minutes du domaine.",
        "distance": "5 km"
      },
      {
        "name": "Domaine des Clos",
        "description": "Beaucaire – Un lieu paisible à proximité.",
        "distance": "8 km"
      }
    ],
    "columns": 3
  }
}
```

**Design decisions:**
- 3 options d'hébergement (sur place + 2 alternatives)
- Distances indiquées pour faciliter le choix
- Descriptions courtes et informatives
- Grid 3 colonnes pour affichage côte à côte

#### infos-home.json

```json
{
  "type": "infos",
  "order": 4,
  "visible": true,
  "data": {
    "title": "Informations pratiques",
    "sections": [
      {
        "title": "Accès",
        "content": "<p>La cérémonie se déroule à la <strong>Cathédrale de Nîmes</strong>.</p><p>La réception aura lieu au <strong>Château de Campuget</strong> (Manduel).</p>"
      },
      {
        "title": "Parking",
        "content": "<p>Un parking est disponible sur place au Château de Campuget.</p>"
      },
      {
        "title": "Météo",
        "content": "<p>Il peut faire très chaud en juin à Nîmes. Pensez à vous hydrater et à prévoir de quoi vous protéger du soleil.</p>"
      }
    ],
    "layout": "grid",
    "columns": 3
  }
}
```

**Design decisions:**
- 3 sections essentielles : Accès, Parking, Météo
- HTML pour mise en forme (gras sur lieux importants)
- Conseils pratiques pour la météo estivale
- Grid 3 colonnes pour lecture rapide

#### rsvp-section-home.json

```json
{
  "type": "cta",
  "order": 5,
  "visible": true,
  "data": {
    "title": "Confirmez votre présence",
    "description": "Merci de confirmer votre venue avant le 1er avril 2026.",
    "cta": {
      "label": "Répondre maintenant",
      "href": "/rsvp"
    },
    "variant": "centered"
  }
}
```

**Design decisions:**
- Date limite claire (1er avril 2026)
- CTA visible et incitatif
- Variante centrée pour mise en valeur
- Ton poli et chaleureux

#### galerie-home.json

```json
{
  "type": "gallery",
  "order": 6,
  "visible": true,
  "data": {
    "title": "Galerie photo",
    "description": "Les photos seront disponibles après le mariage.",
    "images": []
  }
}
```

**Design decisions:**
- Section préparée pour l'après-mariage
- Message clair sur disponibilité future
- Array vide prêt à recevoir les photos
- Ordre 6 : dernière section de la page d'accueil

### 3. Page RSVP avec Tally

#### rsvp.astro

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="RSVP - Ugo & Jeanne"
  description="Confirmez votre présence au mariage d'Ugo et Jeanne"
>
  <section class="py-16 px-4">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-8">Confirmez votre présence</h1>
      <p class="text-center text-lg mb-12 text-gray-600">
        Merci de remplir ce formulaire avant le 1er avril 2026
      </p>
      
      <div class="bg-white rounded-lg shadow-lg p-8">
        <iframe
          data-tally-src="https://tally.so/embed/FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1"
          width="100%"
          height="800"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="RSVP Ugo & Jeanne"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
</BaseLayout>

<script async src="https://tally.so/widgets/embed.js"></script>
```

**Design decisions:**
- Iframe Tally avec paramètres optimisés (alignLeft, hideTitle, transparentBackground)
- Hauteur 800px pour éviter scroll interne
- Loading lazy pour performance
- Script async pour ne pas bloquer le rendu
- Wrapper avec shadow pour intégration visuelle
- Titre et instructions au-dessus du formulaire
- FORM_ID à remplacer par l'ID réel du formulaire Tally

**Paramètres Tally expliqués:**
- `alignLeft=1` : alignement à gauche pour meilleure lisibilité
- `hideTitle=1` : masque le titre Tally (on utilise notre propre titre)
- `transparentBackground=1` : fond transparent pour intégration harmonieuse

### 4. Page Galerie

#### galerie.astro

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';

const galerieData = (await getCollection('sections'))
  .find(s => s.data.type === 'gallery')?.data.data;
---

<BaseLayout
  title="Galerie - Ugo & Jeanne"
  description="Photos du mariage d'Ugo et Jeanne"
>
  <section class="py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-4">
        {galerieData?.title || 'Galerie photo'}
      </h1>
      
      {galerieData?.description && (
        <p class="text-center text-lg mb-12 text-gray-600">
          {galerieData.description}
        </p>
      )}
      
      {galerieData?.images && galerieData.images.length > 0 ? (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galerieData.images.map((image: any) => (
            <div class="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt || 'Photo du mariage'}
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ) : (
        <div class="text-center py-16">
          <p class="text-xl text-gray-500">
            Les photos seront bientôt disponibles !
          </p>
        </div>
      )}
    </div>
  </section>
</BaseLayout>
```

**Design decisions:**
- Grid responsive (1/2/3 colonnes selon écran)
- Aspect ratio carré pour uniformité
- Hover effect (zoom léger) pour interactivité
- Loading lazy pour performance
- Message placeholder si pas encore de photos
- Chargement depuis Content Collections

### 5. Mise à jour du schéma Content Collections

#### config.ts (ajout)

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
      'about',
      'gallery'  // ← Nouveau type
    ]),
    order: z.number(),
    visible: z.boolean().default(true),
    data: z.any(),
  }),
});
```

### 6. Mise à jour BaseLayout SEO

#### BaseLayout.astro (modifications)

```astro
---
interface Props {
  title?: string;
  description?: string;
  ogImage?: string;
  noindex?: boolean;
}

const {
  title = "Mariage d'Ugo Delassus & Jeanne Lauvergne – 27 juin 2026",
  description = "Célébration provençale au Château de Campuget, Manduel.",
  ogImage = "/og-image.jpg",
  noindex = false,
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href={canonicalURL} />
    
    <title>{title}</title>
    <meta name="description" content={description} />
    
    {noindex && <meta name="robots" content="noindex, nofollow" />}
    
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalURL} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={new URL(ogImage, Astro.site)} />
    <meta property="og:locale" content="fr_FR" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={new URL(ogImage, Astro.site)} />
    
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

**Design decisions:**
- Titre par défaut optimisé pour SEO (noms complets + date + lieu)
- Description mentionnant le lieu emblématique (Château de Campuget)
- lang="fr" fixe (pas de multilingue)
- Open Graph pour partage sur réseaux sociaux
- Twitter Card pour meilleur affichage sur Twitter
- Canonical URL pour éviter contenu dupliqué

### 7. Mise à jour Navigation

#### Navigation.astro (ajout lien Galerie)

```astro
---
interface Props {
  currentPath?: string;
  mobile?: boolean;
  class?: string;
}

const { currentPath = '', mobile = false, class: className = '' } = Astro.props;

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Programme', href: '/programme' },
  { label: 'Infos pratiques', href: '/infos' },
  { label: 'Hébergements', href: '/hebergements' },
  { label: 'Galerie', href: '/galerie' },  // ← Nouveau
  { label: 'RSVP', href: '/rsvp' },
];

const isActive = (href: string) => {
  if (href === '/') return currentPath === '/';
  return currentPath.startsWith(href);
};
---

<nav class={className} aria-label="Navigation principale">
  <ul class={mobile ? 'flex flex-col gap-4' : 'flex gap-6'}>
    {navItems.map(item => (
      <li>
        <a
          href={item.href}
          class={`hover:text-[var(--brand-primary)] transition-colors ${
            isActive(item.href) ? 'text-[var(--brand-primary)] font-semibold' : ''
          }`}
          aria-current={isActive(item.href) ? 'page' : undefined}
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
</nav>
```

**Design decisions:**
- Ajout de "Galerie" entre Hébergements et RSVP
- Ordre logique : infos pratiques → galerie → action (RSVP)
- Highlight de la page active avec couleur primaire
- aria-current pour accessibilité

## Data Models

### Content Collections - Structure complète

```typescript
// Tous les fichiers sections suivent cette structure
{
  type: string,        // Type de section
  order: number,       // Ordre d'affichage
  visible: boolean,    // Visibilité
  data: {             // Données spécifiques à chaque type
    // Varie selon le type de section
  }
}
```

### Types de données par section

**Hero:**
```typescript
{
  title: string;
  subtitle: string;
  date: string;
  image?: string;
  cta: { label: string; href: string; };
  variant?: string;
}
```

**Story:**
```typescript
{
  title: string;
  content: string; // HTML
}
```

**Programme:**
```typescript
{
  title: string;
  schedule: Array<{
    time: string;
    event: string;
    description: string;
  }>;
  variant?: string;
}
```

**Hébergements:**
```typescript
{
  title: string;
  hotels: Array<{
    name: string;
    description: string;
    distance?: string;
  }>;
  columns?: number;
}
```

**Infos:**
```typescript
{
  title: string;
  sections: Array<{
    title: string;
    content: string; // HTML
  }>;
  layout?: string;
  columns?: number;
}
```

**CTA (RSVP Section):**
```typescript
{
  title: string;
  description: string;
  cta: { label: string; href: string; };
  variant?: string;
}
```

**Gallery:**
```typescript
{
  title: string;
  description?: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
}
```

## Error Handling

### Gestion des erreurs Tally

```astro
<!-- Fallback si Tally ne charge pas -->
<noscript>
  <p>Ce formulaire nécessite JavaScript. Veuillez activer JavaScript ou nous contacter directement.</p>
</noscript>
```

### Gestion des images manquantes

```astro
<!-- Hero avec image placeholder -->
{image ? (
  <img src={image} alt="Ugo & Jeanne" />
) : (
  <div class="bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-secondary)] h-64" />
)}
```

### Gestion du contenu manquant

Toutes les sections utilisent le pattern de rendu conditionnel :
```astro
{sectionData && <Component {...sectionData} />}
```

## Testing Strategy

### Tests de contenu

1. **Vérifier que tous les fichiers JSON sont valides**
   - Parser JSON sans erreur
   - Vérifier la structure (type, order, visible, data)

2. **Vérifier l'affichage du contenu**
   - Toutes les sections s'affichent sur la page d'accueil
   - Le contenu réel est visible (pas de placeholders)
   - Les liens fonctionnent

### Tests visuels

1. **Palette de couleurs**
   - Vérifier que les couleurs provençales sont appliquées
   - Tester les états hover
   - Vérifier les contrastes (accessibilité)

2. **Responsive**
   - Mobile : navigation, sections, formulaire
   - Tablet : grids 2 colonnes
   - Desktop : grids 3 colonnes

### Tests fonctionnels

1. **Navigation**
   - Tous les liens fonctionnent
   - Page active highlightée
   - Navigation mobile

2. **Formulaire RSVP**
   - Iframe Tally charge correctement
   - Formulaire responsive
   - Soumission fonctionne

3. **SEO**
   - Balises meta présentes
   - Open Graph valide
   - Pas d'erreurs dans les outils SEO

### Tests de build

```bash
npm run build
# Doit compiler sans erreurs

npm run preview
# Doit servir le site correctement
```

## Design Decisions Rationale

### Pourquoi Tally pour le RSVP ?

- Solution clé en main, pas de backend à gérer
- Interface moderne et responsive
- Paramètres d'intégration flexibles
- Gratuit pour usage personnel

### Pourquoi créer la galerie maintenant ?

- Préparer l'infrastructure pour l'après-mariage
- Éviter de devoir modifier le site plus tard
- Navigation complète dès le départ
- Message clair sur disponibilité future

### Pourquoi ces couleurs provençales ?

- Sauge : couleur naturelle, apaisante, évoque la végétation provençale
- Beige pierre : élégance, rappelle l'architecture locale
- Blanc provençal : luminosité du Sud, pureté
- Palette cohérente et harmonieuse

### Pourquoi mettre la date limite RSVP au 1er avril ?

- 3 mois avant le mariage (27 juin)
- Temps suffisant pour organisation finale
- Date facile à retenir (début de mois)

### Pourquoi 3 options d'hébergement ?

- Sur place : pratique pour les invités
- 2 alternatives : choix selon budget/préférences
- Pas trop d'options : évite la paralysie du choix
- Distances indiquées : aide à la décision

## Implementation Notes

### Ordre d'implémentation recommandé

1. Mettre à jour tokens.css (palette)
2. Créer tous les fichiers JSON de contenu
3. Mettre à jour config.ts (type gallery)
4. Mettre à jour BaseLayout (SEO)
5. Mettre à jour Navigation (lien Galerie)
6. Créer galerie.astro
7. Mettre à jour rsvp.astro (Tally)
8. Tester et valider

### Points d'attention

- **FORM_ID Tally** : à remplacer par l'ID réel du formulaire
- **Images** : hero-couple.jpg et og-image.jpg sont des placeholders
- **Contenu HTML** : bien échapper les caractères spéciaux dans les JSON
- **Responsive** : tester particulièrement le formulaire Tally sur mobile

### Optimisations futures possibles

- Ajouter une lightbox pour la galerie
- Implémenter un système de filtres pour les photos
- Ajouter des animations au scroll
- Optimiser les images (WebP, srcset)
- Ajouter un compte à rebours jusqu'au mariage
