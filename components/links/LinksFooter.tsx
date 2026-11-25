import { ChaosText } from '@/components/ContactHeroTitle';
import { linksFooter } from '@/config/links';

// Rodapé da página de bio (/): mesma linguagem do rodapé original (linha superior, nome em caos tipográfico,
// microtextos em caixa alta). O Footer global fica oculto na raiz (ver components/Footer.tsx).
export function LinksFooter() {
  return (
    <footer className="lk-footer" aria-label="Rodapé">
      <div className="lk-footer__top">
        <p className="lk-footer__name">
          <ChaosText as="span" lines={[linksFooter.name]} inView className="t-headline" />
        </p>
        <p className="t-micro lk-footer__role">{linksFooter.role}</p>
      </div>
      <p className="t-micro footer__base lk-footer__base">
        <span>{linksFooter.location}</span>
        <span>{linksFooter.note}</span>
      </p>
    </footer>
  );
}
