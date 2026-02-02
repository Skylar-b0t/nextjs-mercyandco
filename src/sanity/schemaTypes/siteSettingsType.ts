import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        // Hero Section
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'e.g., Dundee, Scotland, UK',
        }),

        // About Section
        defineField({
            name: 'founderName',
            title: 'Founder Name',
            type: 'string',
        }),
        defineField({
            name: 'founderImage',
            title: 'Founder Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'aboutText',
            title: 'About Text',
            type: 'text',
            rows: 5,
        }),

        // Stats
        defineField({
            name: 'yearsExperience',
            title: 'Years of Experience',
            type: 'string',
            description: 'e.g., 10+',
        }),
        defineField({
            name: 'happyCouples',
            title: 'Happy Couples',
            type: 'string',
            description: 'e.g., 500+',
        }),
        defineField({
            name: 'eventsCovered',
            title: 'Events Covered',
            type: 'string',
            description: 'e.g., 1000+',
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Site Settings',
            }
        },
    },
})
