import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	// Our own interface strings, next to Starlight's (src/content/i18n/<lang>.json).
	i18n: defineCollection({
		loader: i18nLoader(),
		schema: i18nSchema({
			extend: z.object({
				'mae.disclaimer': z.string().optional(),
				'mae.privacy': z.string().optional(),
				'mae.deletion': z.string().optional(),
			}),
		}),
	}),
};
