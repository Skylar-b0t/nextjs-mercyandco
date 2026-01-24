import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Name', type: 'string' }),
        defineField({ name: 'quote', title: 'Quote', type: 'text' }),
        defineField({ name: 'event', title: 'Event Type', type: 'string' }),
        defineField({
            name: 'image',
            title: 'Client Photo',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
});
