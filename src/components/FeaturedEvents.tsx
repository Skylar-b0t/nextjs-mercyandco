import { client } from '@/lib/sanity';
import InteractiveGallery, { Photo } from '@/components/InteractiveGallery';

// Define the query to fetch featured photos
const EVENTS_QUERY = `
  *[_type == "eventPhoto" && featured == true] | order(order asc) {
    title,
    image,
    "alt": image.alt,
    "category": category->title,
    height
  }
`;

// Define the query to fetch categories
const CATEGORIES_QUERY = `
  *[_type == "eventCategory"] | order(title asc).title
`;

export default async function FeaturedEvents() {
  const photos = await client.fetch<Photo[]>(EVENTS_QUERY);
  const categoriesData = await client.fetch<string[]>(CATEGORIES_QUERY);

  // Add 'All' to categories if not present (though usually we handle 'All' in the frontend, 
  // but the component expects a list of categories to filter by)
  const categories = ['All', ...categoriesData];

  return <InteractiveGallery photos={photos} categories={categories} />;
}
