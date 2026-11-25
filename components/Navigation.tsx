'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { CSSProperties } from 'react';
import { siteConfig } from '@/config/site';

// ✏️ PEDRO: ALTERE OS ITENS DO MENU AQUI
// Este é o site de bio: todos os itens levam ao SITE OFICIAL (siteConfig.mainUrl), por isso são links comuns (<a>), sem a cortina de transição.
// `mobile` = mesmo texto com hifens opcionais (\u00AD) nas fronteiras silábicas do português (tra-ba-lhos, or-ça-men-to).
// Só são usados se a tela for estreita demais (ver `.menu__item` no globals.css); normalmente a palavra aparece inteira.
const main = siteConfig.mainUrl;
const links = [
  { href: `${main}/`, label: 'HOME' },
  { href: `${main}/work`, label: 'TRABALHOS', mobile: 'TRA\u00ADBA\u00ADLHOS' },
  { href: `${main}/lab/editor`, label: 'IMAGE LAB' },
  { href: `${main}/contact`, label: 'CONTACT', mobile: 'CON\u00ADTACT' },
  { href: `${main}/quote`, label: 'ORÇAMENTO', mobile: 'OR\u00ADÇA\u00ADMEN\u00ADTO' },
] as { href: string; label: string; mobile?: string }[];

export function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    addEventListener('keydown', esc);
    return () => removeEventListener('keydown', esc);
  }, [open]);
  return (
    <>
      {/* A página de bio é a raiz (/): nela a barra flutua afastada das bordas (.nav--float). */}
      <header className={`nav${path === '/' ? ' nav--float' : ''}`}>
        <a href={`${main}/`} className="nav__logo" aria-label="Pedro Vileira — Site oficial">PV</a>
        <nav aria-label="Main" className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <button className="nav__btn" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? 'CLOSE' : 'MENU'}</button>
      </header>
      <div id="menu" className={`menu ${open ? 'is-open' : ''}`} inert={!open}>
        <nav aria-label="Mobile">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="menu__item t-headline" style={{ '--i': i } as CSSProperties}>{l.mobile ?? l.label}</a>
          ))}
        </nav>
      </div>
    </>
  );
}
