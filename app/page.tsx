import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { linkCards } from '@/config/links';
import { ChaosText } from '@/components/ContactHeroTitle';
import { LinksHero } from '@/components/links/LinksHero';
import { LinkCard } from '@/components/links/LinkCard';
import { LinksFooter } from '@/components/links/LinksFooter';

// Página de bio — é a página inicial (/) de links.pedrovileira.com.
const description = siteConfig.description;
const pageTitle = `${siteConfig.name} — Links`;

export const metadata: Metadata = {
  description,
  alternates: { canonical: '/' }, // resolvido com metadataBase → https://links.pedrovileira.com/
  openGraph: {
    title: pageTitle,
    description,
    url: siteConfig.url,
    siteName: pageTitle,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: pageTitle }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description, images: [siteConfig.ogImage] },
};

// Dados estruturados: a página e o WebSite pertencem a links.pedrovileira.com.
// A pessoa é a mesma do site oficial (mesmo @id), por isso aponta para pedrovileira.com — a bio não se declara parte do domínio principal.
const personId = `${siteConfig.mainUrl}/#pedro-vileira`;
const websiteId = `${siteConfig.url}/#website`;
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: `${siteConfig.url}/`,
      name: pageTitle,
      description,
      inLanguage: 'pt-BR',
      publisher: { '@id': personId },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteConfig.url}/#webpage`,
      url: `${siteConfig.url}/`,
      name: pageTitle,
      description,
      inLanguage: 'pt-BR',
      isPartOf: { '@id': websiteId },
      mainEntity: { '@id': personId },
      about: { '@id': personId },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: siteConfig.name,
      url: `${siteConfig.mainUrl}/`,
      jobTitle: siteConfig.jobTitle,
      sameAs: [siteConfig.instagram, siteConfig.linkedin, siteConfig.behance].filter(Boolean),
    },
  ],
};

export default function BioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <div className="lk">
        <LinksHero />

        <section className="lk-explore" aria-label="Explore meu universo">
          <div className="lk-explore__head grid">
            <span className="t-micro lk-explore__label">( {String(linkCards.length).padStart(2, '0')} DESTINOS )</span>
            <ChaosText as="h2" lines={['EXPLORE', 'MEU UNIVERSO']} inView className="t-headline lk-explore__title" />
          </div>
          <div className="lk-grid grid">
            {linkCards.map((c, i) => <LinkCard key={c.id} card={c} index={i} />)}
          </div>
        </section>

        <LinksFooter />
      </div>
    </>
  );
}
