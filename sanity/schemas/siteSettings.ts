import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string', initialValue: 'Mercy & Co' }),
        defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', initialValue: 'Capturing Extraordinary Moments' }),
        defineField({ name: 'phone', title: 'Phone', type: 'string', initialValue: '+44 7355 879695' }),
        defineField({ name: 'location', title: 'Location', type: 'string', initialValue: 'Dundee, Scotland, UK' }),
        defineField({ name: 'aboutText', title: 'About Text', type: 'text' }),
        defineField({ name: 'founderName', title: 'Founder Name', type: 'string', initialValue: 'Mercy' }),
        defineField({ name: 'founderImage', title: 'Founder Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'yearsExperience', title: 'Years Experience', type: 'string', initialValue: '10+' }),
        defineField({ name: 'eventsCovered', title: 'Events Covered', type: 'string', initialValue: '500+' }),
        defineField({ name: 'happyCouples', title: 'Happy Couples', type: 'string', initialValue: '300+' }),
    ],
});
