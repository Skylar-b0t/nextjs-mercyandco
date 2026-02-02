import { defineField, defineType } from 'sanity'

export const portfolioType = defineType({
    name: 'portfolio',
    title: 'Portfolio Photo',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Photo Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'For accessibility and SEO',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Weddings', value: 'weddings' },
                    { title: 'Portraits', value: 'portraits' },
                    { title: 'Events', value: 'events' },
                    { title: 'Family', value: 'family' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'height',
            title: 'Height Variant',
            type: 'string',
            options: {
                list: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Tall', value: 'tall' },
                ],
            },
            initialValue: 'normal',
            description: 'For masonry grid layout',
        }),
        defineField({
            name: 'featured',
            title: 'Featured Photo',
            type: 'boolean',
            description: 'Show on homepage',
            initialValue: false,
        }),
        defineField({
            name: 'dateTaken',
            title: 'Date Taken',
            type: 'date',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first',
            initialValue: 0,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'image',
        },
    },
})
