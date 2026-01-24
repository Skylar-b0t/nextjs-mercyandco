
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedEvents from "@/components/FeaturedEvents";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { client } from "@/lib/sanity";

const CATEGORIES_QUERY = `*[_type == "eventCategory"] { title }`;

export const dynamic = 'force-dynamic';

async function getEventTypes() {
  const categories = await client.fetch<{ title: string }[]>(CATEGORIES_QUERY);
  return categories.map(c => c.title);
}

export default async function Home() {
  const eventTypes = await getEventTypes();

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FeaturedEvents />
        <AboutSection />
        <Services />
        <Testimonials />
        <ContactForm eventTypes={eventTypes} />
      </main>
      <Footer />
    </>
  );
}
