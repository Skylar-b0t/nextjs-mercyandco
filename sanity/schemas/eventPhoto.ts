import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'eventPhoto',
    title: 'Event Photo',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title / Description',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Photo',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    validation: Rule => Rule.required(),
                }),
            ],
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'eventCategory' }],
        }),
        defineField({
            name: 'featured',
            title: 'Featured on Homepage?',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'height',
            title: 'Height Aspect',
            type: 'string',
            options: {
                list: [
                    { title: 'Normal (4:3)', value: 'normal' },
                    { title: 'Tall (3:4)', value: 'tall' },
                ],
            },
            initialValue: 'normal',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            initialValue: 0,
        }),
    ],
    preview: {
        select: { title: 'title', media: 'image' },
        prepare({ title, media }) {
            return { title, media };
        },
    },
});
