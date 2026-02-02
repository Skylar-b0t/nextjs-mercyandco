
import { Suspense } from 'react';
import GalleryContent from './GalleryContent';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { client } from '@/lib/sanity';

// Define the query to fetch portfolio photos from Sanity
const GALLERY_QUERY = `
  *[_type == "portfolio"] | order(order asc) {
    _id,
    title,
    image,
    "alt": alt,
    category,
    height,
    featured
  }
`;

// Get unique categories from portfolio photos
const CATEGORIES_QUERY = `
  array::unique(*[_type == "portfolio"].category)
`;

export const dynamic = 'force-dynamic';

function GalleryLoading() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-[#0a0a0a] flex items-center justify-center">
            <div className="text-center">
                <div className="w-12 h-12 border-2 border-[#d4a574] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-[#a0a0a0]">Loading gallery...</p>
            </div>
        </div>
    );
}

export default async function GalleryPage() {
    const photos = await client.fetch(GALLERY_QUERY);
    const categoriesData = await client.fetch<string[]>(CATEGORIES_QUERY);
    const categories = ['All', ...categoriesData];

    return (
        <>
            <Navigation />
            <Suspense fallback={<GalleryLoading />}>
                <GalleryContent photos={photos} categories={categories} />
            </Suspense>
            <Footer />
        </>
    );
}
