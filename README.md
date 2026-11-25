# Pedro Vileira — Site de bio (links.pedrovileira.com)

Site **independente** de uma página só: a bio de Pedro Vileira, publicada em `https://links.pedrovileira.com`.
Não depende do projeto do site oficial (`pedrovileira.com`) e não precisa de nenhuma variável de ambiente.

- **Stack:** Next.js 15 (App Router) + React 19 + TypeScript
- **Página inicial (`/`):** a bio, com os 4 cards (Portfólio, Image Lab, WhatsApp, Instagram)
- **Portfólio** → `https://pedrovileira.com`
- **Image Lab** → `https://pedrovileira.com/lab/editor` (usa a ferramenta do site oficial; ela **não** existe neste projeto)
- **WhatsApp / Instagram** → vêm de `config/site.ts`
- **Menu do topo:** todos os itens levam ao site oficial

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start
```

Requer Node 18.18 ou superior.

## Onde editar

| O quê | Onde |
| --- | --- |
| Endereço da bio e do site oficial, e-mail, Instagram, WhatsApp… | `config/site.ts` (`url` = esta bio · `mainUrl` = site oficial) |
| Textos e destinos dos cards | `config/links.ts` |
| Itens do menu | `components/Navigation.tsx` |
| Velocidade das animações | `config/motion.ts` |
| Cores, tipografia e estilos | `styles/globals.css` |
| Imagem de compartilhamento (1200×630) | `public/og.jpg` |

## SEO

Canonical, Open Graph, Twitter, `sitemap.xml`, `robots.txt` e dados estruturados (JSON-LD) usam `https://links.pedrovileira.com`.
A página se declara parte de `links.pedrovileira.com`; apenas a *pessoa* (`Person`) é a mesma entidade do site oficial (mesmo `@id`).

## Publicar (GitHub + Vercel)

1. Crie um repositório novo no GitHub e envie o conteúdo desta pasta (a raiz do repositório deve conter `package.json`).
2. Na Vercel: **Add New → Project**, importe o repositório novo. Framework: **Next.js** (detectado sozinho). Não há variáveis de ambiente a configurar.
3. Em **Settings → Domains** do projeto, adicione `links.pedrovileira.com`.
4. No DNS do domínio, crie o registro que a Vercel indicar — normalmente um **CNAME** de `links` para `cname.vercel-dns.com` (ou o valor exibido na tela). Se o DNS de `pedrovileira.com` já estiver na Vercel, o registro é criado automaticamente.
5. Pronto: `https://links.pedrovileira.com` abre direto a bio. O site oficial segue em outro projeto, sem alterações.

> Dica: se o Search Console do site oficial foi verificado só por arquivo HTML (prefixo de URL), adicione `https://links.pedrovileira.com` como uma nova propriedade (ou use uma propriedade de **Domínio**, que já cobre subdomínios).
