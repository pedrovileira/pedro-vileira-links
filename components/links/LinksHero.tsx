'use client';
import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/config/site';
import { linksHero } from '@/config/links';
import { ChaosText } from '@/components/ContactHeroTitle';
import { HeroStickers } from '@/components/HeroStickers';
import { ImageReveal } from '@/components/ImageReveal';
import { TextReveal } from '@/components/TextReveal';
import { prefersReducedMotion } from '@/lib/hooks';

// 🖼️ PEDRO — foto do hero. Troque o arquivo em /public/images/home/ (proporção 4:5) ou mude o caminho aqui.
const PORTRAIT = '/images/home/pedro-01.jpg';

// Hero da página de bio (/): nome com o mesmo "caos tipográfico" e adesivos da Home, retrato com leve inclinação
// e formas flutuantes que respondem ao mouse (só desktop; no toque elas se movem sozinhas via CSS).
export function LinksHero() {
  const root = useRef<HTMLElement>(null);
  const [time, setTime] = useState('');

  // Parallax: grava --mx / --my (−1…1) no hero; o CSS usa esses valores nas formas e no retrato.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches || prefersReducedMotion()) return;
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0, running = false;
    const loop = () => {
      x += (tx - x) * 0.08; y += (ty - y) * 0.08;
      el.style.setProperty('--mx', x.toFixed(3));
      el.style.setProperty('--my', y.toFixed(3));
      if (Math.abs(tx - x) > 0.001 || Math.abs(ty - y) > 0.001) raf = requestAnimationFrame(loop);
      else running = false;
    };
    const kick = () => { if (!running) { running = true; raf = requestAnimationFrame(loop); } };
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      kick();
    };
    const leave = () => { tx = 0; ty = 0; kick(); };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); cancelAnimationFrame(raf); };
  }, []);

  // Relógio de São José dos Campos (informação editorial, atualiza a cada 30 s)
  useEffect(() => {
    const fmt = () => new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={root} className="lk-hero" aria-label="Apresentação">
      <div className="lk-hero__row t-micro">
        <span>{siteConfig.role}</span>
        <span>{siteConfig.location}</span>
        <span>LINKS / 2026</span>
      </div>

      <div className="lk-hero__stage">
        {/* .hero__name é a âncora dos adesivos (igual à Home) */}
        <div className="hero__name lk-hero__name">
          <ChaosText lines={linksHero.name} wait className="t-display lk-hero__title" />
          <HeroStickers />
        </div>

        <div className="lk-hero__copy">
          <p className="t-subtitle">{linksHero.description}</p>
          <TextReveal as="p" lines={linksHero.tagline} wait className="lk-hero__tagline" />
        </div>

        <figure className="lk-hero__portrait">
          <span className="lk-hero__vertical t-micro" aria-hidden="true">PEDRO VILEIRA — PORTFÓLIO 2026</span>
          <div className="lk-hero__tilt">
            <div className="lk-hero__frame">
              <ImageReveal src={PORTRAIT} alt="Retrato de Pedro Vileira" ratio="4 / 5" priority sizes="(min-width:1024px) 24vw, 70vw" />
            </div>
            <figcaption className="lk-hero__cap t-micro">
              <span>( RETRATO )</span>
              <span>SJC {time || '--:--'}</span>
            </figcaption>
          </div>
        </figure>

        {/* Formas flutuantes — decorativas */}
        <span className="lk-fl lk-fl--star" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" /></svg>
        </span>
        <span className="lk-fl lk-fl--ring" aria-hidden="true">
          <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" /><path d="M50 0v100M0 50h100" /></svg>
        </span>
        <span className="lk-fl lk-fl--wave" aria-hidden="true">
          <svg viewBox="0 0 120 24"><path d="M2 12Q17-4 32 12T62 12T92 12T118 12" /></svg>
        </span>
      </div>

      <div className="lk-hero__row t-micro">
        <span>ROLE PARA EXPLORAR ↓</span>
        <span>04 DESTINOS</span>
      </div>
    </section>
  );
}
