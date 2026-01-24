import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'eventCategory',
    title: 'Event Category',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            validation: Rule => Rule.required(),
        }),
    ],
});
