import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { motionVars } from '@/config/motion';
import { PageTransition } from '@/components/PageTransition';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Loader } from '@/components/Loader';
import { Cursor } from '@/components/Cursor';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';

// ✏️ PEDRO: TROQUE A FONTE AQUI (qualquer fonte do Google Fonts) e ajuste --font-sans em globals.css
const font = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), // links.pedrovileira.com — base de canonical, Open Graph e imagens
  title: { default: `${siteConfig.name} — Links`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} — Links`,
  openGraph: { title: `${siteConfig.name} — Links`, description: siteConfig.description, url: siteConfig.url, siteName: `${siteConfig.name} — Links`, images: [siteConfig.ogImage], locale: 'pt_BR', type: 'website' },
  twitter: { card: 'summary_large_image', title: `${siteConfig.name} — Links`, description: siteConfig.description, images: [siteConfig.ogImage] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={font.variable} style={motionVars} suppressHydrationWarning>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <PageTransition>
          <SmoothScroll /><Loader /><Cursor /><Navigation /><ThemeToggle />
          <main id="main">{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
