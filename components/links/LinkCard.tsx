'use client';
import type { CSSProperties, ReactNode } from 'react';
import { TransitionLink } from '@/components/TransitionLink';
import { ImageReveal } from '@/components/ImageReveal';
import { Media } from '@/components/Media';
import { TextReveal } from '@/components/TextReveal';
import { HeroStickers, type StickerDef } from '@/components/HeroStickers';
import { useInView } from '@/lib/hooks';
import { instagramHandle, type LinkCardData } from '@/config/links';

// 🖼️ PEDRO — imagens usadas nos cards (troque os caminhos se quiser outras fotos)
const IMG = {
  portfolio: '/images/projects/allone/hero.jpg',
  lab: '/images/projects/colinas/cover.jpg',
  personal: '/images/home/pedro-02.png',
};

// ✏️ PEDRO — adesivos arrastáveis que ficam por cima do card "Além do design" (mesmo sistema da Home)
const PERSONAL_STICKERS: StickerDef[] = [
  { id: 'p1', label: 'OI!', cls: 'sticker--lk1' },
  { id: 'p2', label: 'BEM-VINDO', cls: 'sticker--lk2' },
];

function Arrow() {
  return (
    <span className="lk-arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 12h15M13 5.5 19.5 12 13 18.5" /></svg>
    </span>
  );
}

// Cada card tem um "miolo" visual próprio; o resto da estrutura (topo, título, texto, base) é igual para os quatro.
function Visual({ card }: { card: LinkCardData }): ReactNode {
  switch (card.kind) {
    case 'portfolio':
      return (
        <div className="lk-card__media lk-card__media--fill" aria-hidden="true">
          <ImageReveal src={IMG.portfolio} alt="Projeto All One — identidade visual" ratio="16 / 10" sizes="(min-width:1024px) 58vw, 100vw" />
        </div>
      );
    case 'lab':
      // Antes/depois: a metade colorida desliza no hover (e sozinha em telas de toque).
      return (
        <div className="lk-lab" aria-hidden="true">
          <div className="lk-lab__frame">
            <div className="lk-lab__stage">
              <div className="lk-lab__img lk-lab__img--before"><Media src={IMG.lab} alt="Foto original" sizes="(min-width:1024px) 40vw, 90vw" /></div>
              <div className="lk-lab__img lk-lab__img--after"><Media src={IMG.lab} alt="Foto editada" sizes="(min-width:1024px) 40vw, 90vw" /></div>
              <span className="lk-lab__cut" />
              <span className="lk-lab__tag lk-lab__tag--a t-micro">ANTES</span>
              <span className="lk-lab__tag lk-lab__tag--b t-micro">DEPOIS</span>
            </div>
          </div>
          <div className="lk-lab__bar"><span className="lk-lab__fill" /></div>
        </div>
      );
    case 'whatsapp':
      return (
        <div className="lk-chat" aria-hidden="true">
          <span className="lk-chat__b">Oi, Pedro!</span>
          <span className="lk-chat__b lk-chat__b--typing"><i /><i /><i /></span>
        </div>
      );
    case 'personal':
      return (
        <div className="lk-polaroid" aria-hidden="true">
          <div className="lk-polaroid__photo">
            <ImageReveal src={IMG.personal} alt="Pedro Vileira" ratio="1 / 1" sizes="(min-width:1024px) 20vw, 60vw" />
          </div>
          <span className="lk-polaroid__cap">@{instagramHandle}</span>
        </div>
      );
  }
}

export function LinkCard({ card, index }: { card: LinkCardData; index: number }) {
  const { ref, on } = useInView<HTMLDivElement>();
  const cls = `lk-card lk-card--${card.kind}${card.external ? ' lk-card--ext' : ''}`;
  const cursor = { 'data-cursor': 'view', 'data-cursor-label': card.cursorLabel } as const;

  const inner = (
    <>
      <div className="lk-card__top t-micro">
        <span aria-hidden="true">( {card.index} )</span>
        <span>{card.eyebrow}</span>
      </div>
      <Visual card={card} />
      <div className="lk-card__body">
        <TextReveal as="h3" lines={card.title} className="lk-card__title" />
        <p className="lk-card__desc">{card.description}</p>
      </div>
      <div className="lk-card__foot t-micro">
        <span>{card.cta}</span>
        <Arrow />
        {card.newTab && <span className="lk-sr"> (abre em nova aba)</span>}
      </div>
    </>
  );

  return (
    <div
      ref={ref}
      className={`lk-item lk-item--${card.kind} ${on ? 'is-in' : ''}`}
      style={{ '--i': index } as CSSProperties}
    >
      {card.external ? (
        <a
          href={card.href}
          className={cls}
          {...(card.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...cursor}
        >
          {inner}
        </a>
      ) : (
        <TransitionLink href={card.href} label={card.transitionLabel} className={cls} {...cursor}>
          {inner}
        </TransitionLink>
      )}
      {/* Os adesivos ficam FORA do <a>, para arrastar não disparar o link */}
      {card.kind === 'personal' && <HeroStickers stickers={PERSONAL_STICKERS} />}
    </div>
  );
}
