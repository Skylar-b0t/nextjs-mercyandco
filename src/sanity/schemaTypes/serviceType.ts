import { defineField, defineType } from 'sanity'

export const serviceType = defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Service Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (rule) => rule.required().min(1),
        }),
        defineField({
            name: 'startingPrice',
            title: 'Starting Price',
            type: 'string',
            description: 'e.g., £1,500',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Wedding', value: 'wedding' },
                    { title: 'Event', value: 'event' },
                    { title: 'Portrait', value: 'portrait' },
                    { title: 'Family', value: 'family' },
                ],
            },
        }),
        defineField({
            name: 'image',
            title: 'Service Image',
            type: 'image',
            options: {
                hotspot: true,
            },
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
            subtitle: 'startingPrice',
            media: 'image',
        },
    },
})
