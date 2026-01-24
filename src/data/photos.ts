// Photo data for the gallery
// Replace these Unsplash URLs with your actual photography

export interface Photo {
    src: string;
    alt: string;
    title: string;
    category: 'weddings' | 'portraits' | 'events' | 'family';
    height?: 'tall' | 'normal';
}

export const photos: Photo[] = [
    // Weddings
    {
        src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070',
        alt: 'Wedding couple at sunset',
        title: 'Eternal Love',
        category: 'weddings',
        height: 'tall',
    },
    {
        src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069',
        alt: 'Wedding ceremony',
        title: 'The Ceremony',
        category: 'weddings',
        height: 'tall',
    },
    {
        src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070',
        alt: 'Outdoor wedding',
        title: 'Garden Romance',
        category: 'weddings',
        height: 'normal',
    },
    {
        src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070',
        alt: 'Wedding reception',
        title: 'Celebration',
        category: 'weddings',
        height: 'normal',
    },
    {
        src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070',
        alt: 'Bride portrait',
        title: 'Bridal Beauty',
        category: 'weddings',
        height: 'tall',
    },
    {
        src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2071',
        alt: 'Wedding rings',
        title: 'Symbol of Love',
        category: 'weddings',
        height: 'normal',
    },

    // Portraits
    {
        src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071',
        alt: 'Portrait photography',
        title: 'Candid Moments',
        category: 'portraits',
        height: 'normal',
    },
    {
        src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1988',
        alt: 'Fashion portrait',
        title: 'Elegance',
        category: 'portraits',
        height: 'tall',
    },
    {
        src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?q=80&w=2076',
        alt: 'Artistic portrait',
        title: 'Light & Shadow',
        category: 'portraits',
        height: 'normal',
    },
    {
        src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964',
        alt: 'Creative portrait',
        title: 'Expression',
        category: 'portraits',
        height: 'tall',
    },
    {
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974',
        alt: 'Professional headshot',
        title: 'Professional',
        category: 'portraits',
        height: 'normal',
    },
    {
        src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964',
        alt: 'Natural portrait',
        title: 'Natural Beauty',
        category: 'portraits',
        height: 'normal',
    },

    // Events
    {
        src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
        alt: 'Corporate event',
        title: 'Corporate Gathering',
        category: 'events',
        height: 'normal',
    },
    {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069',
        alt: 'Conference photography',
        title: 'Conference',
        category: 'events',
        height: 'normal',
    },
    {
        src: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062',
        alt: 'Celebration event',
        title: 'Celebration',
        category: 'events',
        height: 'tall',
    },
    {
        src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070',
        alt: 'Party photography',
        title: 'Party Vibes',
        category: 'events',
        height: 'normal',
    },

    // Family
    {
        src: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=2069',
        alt: 'Family portrait',
        title: 'Family Bonds',
        category: 'family',
        height: 'normal',
    },
    {
        src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070',
        alt: 'Family moment',
        title: 'Precious Moments',
        category: 'family',
        height: 'tall',
    },
    {
        src: 'https://images.unsplash.com/photo-1478479336853-58bf29a8f3f7?q=80&w=2070',
        alt: 'Children photography',
        title: 'Childhood Joy',
        category: 'family',
        height: 'normal',
    },
    {
        src: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=2070',
        alt: 'Family outdoor',
        title: 'Outdoor Adventure',
        category: 'family',
        height: 'normal',
    },
];

export const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Family'] as const;
export type Category = typeof categories[number];
