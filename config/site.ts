// ✏️ PEDRO — TODAS AS INFORMAÇÕES DO SITE DE BIO FICAM AQUI
// Este projeto é o site INDEPENDENTE de bio, publicado em links.pedrovileira.com.
// O site oficial (portfólio + Image Lab) é outro projeto e fica em pedrovileira.com.
export const siteConfig = {
  url: 'https://links.pedrovileira.com', // ✏️ PEDRO: endereço DESTE site de bio (usado em canonical, Open Graph, sitemap e dados estruturados)
  mainUrl: 'https://pedrovileira.com', // ✏️ PEDRO: endereço do SITE OFICIAL (portfólio, Image Lab, menu). Sem barra no final.
  name: 'Pedro Vileira', // ✏️ PEDRO: ALTERE SEU NOME AQUI
  role: 'DESIGNER GRÁFICO / DIRETOR DE ARTE', // ✏️ PEDRO: ALTERE SEU CARGO AQUI
  jobTitle: 'Designer Gráfico e Diretor de Arte', // ✏️ PEDRO: cargo em texto corrido (dados estruturados)
  description: 'Todos os caminhos até Pedro Vileira, designer gráfico e diretor de arte: portfólio, Image Lab, WhatsApp e Instagram.', // ✏️ PEDRO: ALTERE A DESCRIÇÃO (SEO)
  location: 'SÃO JOSÉ DOS CAMPOS, BR', // ✏️ PEDRO: ALTERE SUA LOCALIZAÇÃO AQUI
  email: 'contato@pedrovileira.com', // ✏️ PEDRO: ALTERE O E-MAIL AQUI
  instagram: 'https://instagram.com/pedrovileira.std', // ✏️ PEDRO: ALTERE O LINK DO INSTAGRAM AQUI
  linkedin: 'https://www.linkedin.com/in/pedro-vileira-0b10b9441', // ✏️ PEDRO: SEU LINKEDIN (deixe '' se ainda não tiver — some do site sozinho)
  behance: 'https://www.behance.net/pedrovileira', // ✏️ PEDRO: SEU BEHANCE (deixe '' se ainda não tiver — some do site sozinho)
  whatsapp: 'https://wa.me/5512996853826', // ✏️ PEDRO: ALTERE O WHATSAPP AQUI (formato wa.me/55DDDNUMERO)
  ogImage: '/og.jpg', // 🖼️ Imagem de compartilhamento 1200x630, em /public/og.jpg
};

// ✏️ PEDRO — links vazios ('') são removidos automaticamente da lista abaixo
export const socials = [
  { label: 'INSTAGRAM', href: siteConfig.instagram },
  { label: 'LINKEDIN', href: siteConfig.linkedin },
  { label: 'E-MAIL', href: `mailto:${siteConfig.email}` },
  { label: 'BEHANCE', href: siteConfig.behance },
  { label: 'WHATSAPP', href: siteConfig.whatsapp },
].filter((s) => s.href);
