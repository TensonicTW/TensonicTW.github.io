import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const linkSchema = z.object({ label: z.string(), href: z.string() });

const products = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    model: z.string(),
    category: z.string(),
    summary: z.string(),
    status: z.enum(['shipping', 'preorder', 'coming', 'archived']).default('shipping'),
    order: z.number().default(99),
    image: z.string().optional(),
    features: z.array(z.string()).default([]),
    specs: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    downloads: z.array(linkSchema).default([]),
  }),
});

const launches = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/launches' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    model: z.string().optional(),
    product: z.string().optional(),
    summary: z.string(),
    highlights: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Tensonic'),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { products, launches, posts };
