import { client } from '@/lib/sanity';
import AboutSectionClient from './AboutSectionClient';

const ABOUT_QUERY = `
  *[_type == "siteSettings"][0] {
    founderName,
    aboutText,
    "founderImageSrc": founderImage.asset->url,
    yearsExperience,
    eventsCovered,
    happyCouples
  }
`;

export default async function AboutSection() {
    const data = await client.fetch(ABOUT_QUERY);

    // Transform sanity data to component props format
    const stats = data ? {
        yearsExperience: data.yearsExperience,
        happyClients: data.happyCouples, // map happyCouples to happyClients
        // photosDelivered and awardsWon are not in Sanity, so they will be undefined and filtered out or defaults used?
        // The component defaults use siteConfig if undefined. 
        // If I pass an object with some undefineds, it might override defaults with undefined.
        // So I should construct the object carefully.
        photosDelivered: undefined,
        awardsWon: undefined
    } : undefined;

    return (
        <AboutSectionClient
            founderName={data?.founderName}
            aboutText={data?.aboutText}
            founderImageSrc={data?.founderImageSrc}
            stats={stats as any} // Cast to any to avoid strict type issues with optional fields if needed
        />
    );
}
