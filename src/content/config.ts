import { defineCollection, z } from 'astro:content';

// Page Collection
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

// Section Collection - Simplified pragmatic approach
// Validation is minimal by design for easier multi-brand adaptation
const sectionsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    type: z.enum(['hero', 'story', 'programme', 'hebergements', 'infos-pratiques', 'rsvp-section', 'cta', 'about', 'gallery']),
    order: z.number(),
    visible: z.boolean().default(true),
    data: z.any(), // Pragmatic - no over-validation, data structure validated by components
  }),
});

export const collections = {
  pages: pagesCollection,
  sections: sectionsCollection,
};
