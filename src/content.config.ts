import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const chapters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/chapters' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(),
      description: z.string().optional(),
      photos: z
        .array(
          z.object({
            src: z.string(),
            alt: z.string(),
          })
        )
        .optional(),
    }),
});

export const collections = { chapters };
