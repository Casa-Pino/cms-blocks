'use client';

import {
  BannerSlide,
  CarrouselSliderTop,
  InstagramEmbed,
  LastNews,
  Sponsors,
  SponsorsBasic,
  TiktokEmbed,
} from '../../../lib';
// import CarrouselSliderTop from '../../../lib/CarrouselSliderTop';

const a = [
  {
    id: 1744210987554,
    externalId: 48508,
    uri: '/gazz-conecta/aplicativos-e-plataformas/aplicativo-mirimim-ajuda-na-socializacao-de-criancas-com-autismo/',
    title: 'Aplicativo Mirimim propõe solução inédita para ajudar crianças autistas na socialização',
    slug: 'aplicativo-mirimim-ajuda-na-socializacao-de-criancas-com-autismo',
    thumbnail:
      'https://cms-gazzconecta-br.s3.amazonaws.com/gazzconecta/2025/04/09114151/Mirimim-aplicativo-Acervo-Pessoal-CAPA-1.png',
    mobileImage:
      'https://cms-gazzconecta-br.s3.amazonaws.com/gazzconecta/2025/04/09114151/Mirimim-aplicativo-Acervo-Pessoal-CAPA-1.png',
    category: 'Aplicativos e Plataformas',
    credit: [
      {
        id: 468,
        name: 'Fernando Henrique de Oliveira',
        slug: 'fernando-henrique-de-oliveira',
        url: '/autor/fernando-henrique-de-oliveira/',
      },
    ],
    createdAt: '2025-04-09T12:00:29',
    showThumbnail: true,
  },
  {
    id: 1744113151578,
    externalId: 48444,
    uri: '/gazz-conecta/espm-investe-no-parana-para-transformar-o-agro-com-inovacao/',
    title: 'ESPM investe no Paraná para transformar o agronegócio com inovação e marketing',
    slug: 'espm-investe-no-parana-para-transformar-o-agro-com-inovacao',
    thumbnail:
      'https://cms-gazzconecta-br.s3.amazonaws.com/gazzconecta/2025/04/07173157/Luciana-Florencio-ESPM-Jean-Arbaiter-CAPA.png',
    category: 'GazzConecta',
    credit: [
      {
        id: 1571,
        name: 'Brenda Iung',
        slug: 'brenda-iung',
        url: '/autor/brenda-iung/',
      },
    ],
    createdAt: '2025-04-07T17:52:17',
    showThumbnail: true,
  },
  {
    id: 1744033960887,
    externalId: 48391,
    uri: '/gazz-conecta/investimentos-e-aportes/novo-fundo-de-100-mi-foca-em-startups-do-sul/',
    title: 'Fundo vai investir R$ 100 milhões em startups early stage do Sul',
    slug: 'novo-fundo-de-100-mi-foca-em-startups-do-sul',
    thumbnail:
      'https://cms-gazzconecta-br.s3.amazonaws.com/gazzconecta/2025/04/04200702/Adonay-Freitas-Jose-Augusto-Albino-Renata-Buss-Raul-Daitx-Primus-Ventures-CAPA.png',
    category: 'Investimentos e Aportes',
    credit: [
      {
        id: 69,
        name: 'GazzConecta',
        slug: 'gazzconecta',
        url: '/autor/gazzconecta/',
      },
    ],
    createdAt: '2025-04-07T06:00:00',
    showThumbnail: true,
  },
];
export default function Home() {
  return (
    <div className="w-full">
      <BannerSlide posts={a} />
    </div>
  );
}
