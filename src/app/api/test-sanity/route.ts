import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';

export async function GET() {
    try {
        const portfolioPhotos = await client.fetch(`
      *[_type == "portfolio"] | order(order asc) {
        _id,
        title,
        "src": image.asset->url,
        "alt": alt,
        category,
        height,
        featured,
        order
      }
    `);

        return NextResponse.json({
            success: true,
            count: portfolioPhotos.length,
            photos: portfolioPhotos
        });
    } catch (error) {
        console.error('Sanity fetch error:', error);
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
