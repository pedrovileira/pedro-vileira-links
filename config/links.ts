import { siteConfig } from './site';

// ✏️ PEDRO — TEXTOS E DESTINOS DA PÁGINA DE BIO (links.pedrovileira.com)
// Portfólio e Image Lab ficam no site oficial (siteConfig.mainUrl); WhatsApp e Instagram vêm de config/site.ts.
// Mude os endereços lá e a página acompanha.

export type LinkCardKind = 'portfolio' | 'lab' | 'whatsapp' | 'personal';

export type LinkCardData = {
  id: string;
  kind: LinkCardKind;
  index: string;            // numeração editorial do card
  eyebrow: string;          // rótulo pequeno no topo do card
  title: string[];          // uma string por linha do título
  description: string;
  cta: string;              // texto da base do card
  href: string;
  newTab: boolean;          // abre em nova aba
  external: boolean;        // true = <a> comum; false = TransitionLink (passa pela cortina de página)
  cursorLabel: string;      // texto dentro do cursor personalizado (até ~5 letras)
  transitionLabel?: string; // texto da cortina de transição (só links internos)
};

export const instagramHandle = siteConfig.instagram.replace(/\/+$/, '').split('/').pop() ?? '';

export const linksHero = {
  name: ['PEDRO', 'VILEIRA'],
  description: 'Designer gráfico, diretor de arte e criador visual.',
  tagline: ['“Transformando ideias', 'em experiências visuais.”'],
};

export const linkCards: LinkCardData[] = [
  {
    id: 'portfolio',
    kind: 'portfolio',
    index: '01',
    eyebrow: 'PORTFÓLIO',
    title: ['MEU', 'TRABALHO'],
    description: 'Projetos, identidades visuais, direção de arte e experiências criativas.',
    cta: 'VER PROJETOS',
    href: siteConfig.mainUrl, // https://pedrovileira.com
    newTab: false,
    external: true,
    cursorLabel: 'VER',
  },
  {
    id: 'lab',
    kind: 'lab',
    index: '02',
    eyebrow: 'IMAGE LAB',
    title: ['IMAGE', 'LAB'],
    description: 'Um laboratório de experimentação visual, fotografia e inteligência artificial.',
    cta: 'ABRIR O LAB',
    href: `${siteConfig.mainUrl}/lab/editor`, // usa o Image Lab do site oficial (a ferramenta e as APIs NÃO existem neste projeto)
    newTab: false,
    external: true,
    cursorLabel: 'LAB',
  },
  {
    id: 'whatsapp',
    kind: 'whatsapp',
    index: '03',
    eyebrow: 'WHATSAPP',
    title: ['VAMOS', 'CONVERSAR?'],
    description: 'Entre em contato diretamente comigo para projetos, ideias e oportunidades.',
    cta: 'CHAMAR AGORA',
    href: siteConfig.whatsapp,
    newTab: true,
    external: true,
    cursorLabel: 'OI!',
  },
  {
    id: 'personal',
    kind: 'personal',
    index: '04',
    eyebrow: 'MAIS SOBRE MIM',
    title: ['ALÉM DO', 'DESIGN'],
    description: 'Um pouco mais sobre quem sou, minhas referências e meu universo pessoal.',
    cta: `SEGUIR @${instagramHandle.toUpperCase()}`,
    href: siteConfig.instagram,
    newTab: true,
    external: true,
    cursorLabel: 'IG',
  },
].filter((c) => c.href) as LinkCardData[]; // link vazio em site.ts = card some sozinho

export const linksFooter = {
  name: siteConfig.name.toUpperCase(),
  role: 'DESIGNER / ART DIRECTOR / VISUAL CREATOR',
  location: 'SÃO JOSÉ DOS CAMPOS — BRASIL',
  note: 'Feito com intenção.',
};
