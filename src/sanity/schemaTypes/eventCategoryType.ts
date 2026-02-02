import { defineField, defineType } from 'sanity'

export const eventCategoryType = defineType({
    name: 'eventCategory',
    title: 'Event Category',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Category Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first in dropdown',
            initialValue: 0,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'description',
        },
    },
})
