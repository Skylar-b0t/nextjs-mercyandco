import { client } from '@/lib/sanity';
import TestimonialsClient, { Testimonial } from './TestimonialsClient';

const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] {
    name,
    quote,
    "event": eventType,
    image
  }
`;

export default async function Testimonials() {
  const testimonials = await client.fetch<Testimonial[]>(TESTIMONIALS_QUERY);

  return <TestimonialsClient testimonials={testimonials.length > 0 ? testimonials : undefined} />;
}
