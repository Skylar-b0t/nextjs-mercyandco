import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { serviceType } from './serviceType'
import { portfolioType } from './portfolioType'
import { siteSettingsType } from './siteSettingsType'
import { eventCategoryType } from './eventCategoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        postType,
        serviceType,
        portfolioType,
        siteSettingsType,
        eventCategoryType,
    ],
}