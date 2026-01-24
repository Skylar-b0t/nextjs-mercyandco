import { client } from '@/lib/sanity';
import HeroClient from './HeroClient';

const HERO_QUERY = `
  *[_type == "siteSettings"][0] {
    heroTitle,
    heroSubtitle,
    location,
    "heroImageSrc": heroImage.asset->url
  }
`;

export default async function Hero() {
    const data = await client.fetch(HERO_QUERY);

    return (
        <HeroClient
            title={data?.heroTitle}
            subtitle={data?.heroSubtitle}
            location={data?.location}
            heroImageSrc={data?.heroImageSrc}
        />
    );
}
