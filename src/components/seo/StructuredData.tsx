export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://mdrakibhossen.com/#person',
    name: 'Md Rakib Hossen',
    alternateName: 'Rakib Hossen',
    jobTitle: 'Full Stack Developer',
    description:
      'Full Stack Developer specializing in Next.js, React, TypeScript, Bubble.io, and modern web applications.',
    url: 'https://mdrakibhossen.com',
    image: 'https://mdrakibhossen.com/images/profile/profile.jpg',
    email: 'mailto:rakibhossen.dev@gmail.com',
    sameAs: ['https://github.com/MdRakibHossen917', 'https://www.linkedin.com/in/rakibhossen917/'],
    knowsAbout: [
      'Full Stack Development',
      'Next.js',
      'React.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Bubble.io',
      'Webflow',
      'Frontend Development',
      'Responsive Web Design',
      'Tailwind CSS',
      'REST APIs',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://mdrakibhossen.com/#website',
    url: 'https://mdrakibhossen.com',
    name: 'Md Rakib Hossen | Full Stack Developer',
    description:
      'Explore the portfolio of Md Rakib Hossen, a Full Stack Developer specializing in Next.js, React, TypeScript, Bubble.io, and modern web applications.',
    publisher: {
      '@id': 'https://mdrakibhossen.com/#person',
    },
    inLanguage: 'en-US',
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': 'https://mdrakibhossen.com/#webpage',
    url: 'https://mdrakibhossen.com',
    name: 'Md Rakib Hossen | Full Stack Developer',
    isPartOf: {
      '@id': 'https://mdrakibhossen.com/#website',
    },
    about: {
      '@id': 'https://mdrakibhossen.com/#person',
    },
    mainEntity: {
      '@id': 'https://mdrakibhossen.com/#person',
    },
    inLanguage: 'en-US',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
