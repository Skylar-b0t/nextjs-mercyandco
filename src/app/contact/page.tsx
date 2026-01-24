
import { client } from '@/lib/sanity';
import ContactPageClient from '@/components/ContactPageClient';

const CATEGORIES_QUERY = `*[_type == "eventCategory"] { title }`;

export const dynamic = 'force-dynamic';

async function getEventTypes() {
    const categories = await client.fetch<{ title: string }[]>(CATEGORIES_QUERY);
    return categories.map(c => c.title);
}

export default async function ContactPage() {
    const eventTypes = await getEventTypes();
    return <ContactPageClient eventTypes={eventTypes} />;
}
