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
    site: 'casapino',
    externalId: 109446,
    uuid: 'b301f783-1f04-59ac-bc0e-e490e66b7e31',
    type: 'post',
    status: 'publish',
    slug: 'shopping-curitiba-inaugurara-decoracao-de-natal-com-papai-noel',
    hat: '',
    title: 'Shopping Curitiba inaugurará decoração de Natal neste sábado, com chegada do Papai Noel ',
    uri: '/sem-categoria/shopping-curitiba-inaugurara-decoracao-de-natal-com-papai-noel/',
    updatedAt: '2024-10-31T12:34:51',
    createdAt: '2024-10-31T12:34:51',
    redirect: null,
    thumbnail: null,
    taxonomies: {
      category: [
        {
          id: 1,
          name: 'Sem categoria',
          slug: 'sem-categoria',
          url: '/category/sem-categoria/',
          isPrimary: false,
        },
      ],
      credit: [
        {
          id: 2,
          name: 'Redação',
          slug: 'redacao',
        },
      ],
    },
    seoTitle:
      'Shopping Curitiba inaugurará decoração de Natal neste sábado, com chegada do Papai Noel  - CMS Casa Pino',
    seoDescription:
      'Será o primeiro shopping da cidade a iniciar a programação natalina; a fachada iluminada é um dos destaques da decoração. O período mais mágico do ano começou. O&nbsp;Shopping&nbsp;Curitiba&nbsp;tradicionalmente é o primeiro a&nbsp;inaugurar&nbsp;a sua&nbsp;decoração&nbsp;de Natal e este ano não será diferente. A celebração está marcada para este sábado (2/11), com um animado desfile a partir das 14h e a [&hellip;]',
    id: 109446,
  },
  {
    site: 'casapino',
    externalId: 109436,
    uuid: '24ba7301-c00d-541e-ae1b-b471f555c0dc',
    type: 'post',
    status: 'publish',
    slug: 'tour-morretes-promove-experiencia-gastronomica',
    hat: 'festival gastronômico',
    title: 'Tour Morretes Chef promove experiência gastronômica pelo valor de R$75',
    uri: '/agenda/tour-morretes-promove-experiencia-gastronomica/',
    updatedAt: '2024-10-30T16:20:22',
    createdAt: '2024-10-30T16:18:19',
    redirect: null,
    thumbnail:
      'https://static.casapino.com.br/casapino/2024/10/30161708/Entradas-Chefs-Hermes-Custodio-Eduardo-Richard-e-Andre-Pionteke-Cred-Guto-Souza.jpg',
    taxonomies: {
      category: [
        {
          id: 2398,
          name: 'Agenda',
          slug: 'agenda',
          url: '/category/agenda/',
          isPrimary: true,
        },
      ],
      credit: [
        {
          id: 2403,
          name: 'Equipe Pinó',
          slug: 'equipe-pino',
          url: false,
          description: '',
        },
      ],
    },
    seoTitle: 'Tour Morretes Chef promove experiência gastronômica pelo valor de R$75 - CMS Casa Pino',
    seoDescription:
      '4ª edição do festival gastronômico de Morretes promove tour inédito em que é possível provar até cinco entradas exclusivas criadas por chefs.',
    id: 109436,
  },
  {
    site: 'casapino',
    externalId: 109430,
    uuid: '14ca5bbf-b2a1-59ae-92a9-0cd87bc5104e',
    type: 'post',
    status: 'publish',
    slug: 'shopping-crystal-promove-encontro-assustador-de-pets-no-halloween',
    hat: 'halloween pet',
    title: 'Shopping Crystal promove encontro assustador de pets no Halloween',
    uri: '/agenda/shopping-crystal-promove-encontro-assustador-de-pets-no-halloween/',
    updatedAt: '2024-10-30T15:53:57',
    createdAt: '2024-10-30T12:03:40',
    redirect: null,
    thumbnail: 'https://static.casapino.com.br/casapino/2024/10/30120130/Halloween.jpg',
    taxonomies: {
      category: [
        {
          id: 2398,
          name: 'Agenda',
          slug: 'agenda',
          url: '/category/agenda/',
          isPrimary: true,
        },
        {
          id: 355,
          name: 'Animal',
          slug: 'animal',
          url: '/category/animal/',
          isPrimary: false,
        },
      ],
      post_tag: [
        {
          id: 2867,
          name: 'agenda',
          slug: 'agenda',
          url: '/tag/agenda/',
        },
        {
          id: 1709,
          name: 'halloween',
          slug: 'halloween',
          url: '/tag/halloween/',
        },
        {
          id: 1590,
          name: 'shopping-crystal',
          slug: 'shopping-crystal',
          url: '/tag/shopping-crystal/',
        },
      ],
      credit: [
        {
          id: 2403,
          name: 'Equipe Pinó',
          slug: 'equipe-pino',
          url: false,
          description: '',
        },
      ],
    },
    seoTitle: 'Shopping Crystal promove encontro assustador de pets no Halloween - CMS Casa Pino',
    seoDescription:
      'Dia 3/11/24, o Shopping Crystal será invadido por criaturas assustadoramente fofas para o evento de Halloween voltado para os pets.',
    id: 109430,
  },
];
export default function Home() {
  return (
    <div className="w-full max-w-[661px]">
      <SponsorsBasic
        errorImage="awdawd"
        {...{
          color: '#ff6900',
          backgroundColor: '#00d084',
          sponsors: [
            {
              id: 1733840444144,
              name: 'teste1',
              url: 'https://www.google.com.br',
              image: 'https://cms-gazzconecta.s3.amazonaws.com/gazzconecta/2024/12/06184948/alan-mareines.png',
            },
            {
              id: 1733840446692,
              name: 'teste2',
              url: 'https://www.youtube.com.br',
              image: 'https://cms-gazzconecta.s3.amazonaws.com/gazzconecta/2024/12/09144131/big-data-evento-CAPA.png',
            },
            {
              id: 1733840448653,
              name: 'teste3',
              url: 'http://gazzconecta.com.br',
              image: 'https://cms-gazzconecta.s3.amazonaws.com/gazzconecta/2024/12/09170516/market4u-CAPA.png',
            },
            {
              id: 1734035157026,
              name: 'teste4',
              url: null,
              image: null,
            },
            {
              id: 1734035176828,
              name: 'teste11',
              url: null,
              image: 'https://cms-gazzconecta.s3.amazonaws.com/gazzconecta/2024/12/11140724/parana-inovador-HOME.png',
            },
            {
              id: 1734035160432,
              name: 'teste5',
              url: null,
              image: 'https://cms-gazzconecta.s3.amazonaws.com/gazzconecta/2024/12/12152547/gemeo-digital-HOME.png',
            },
            {
              id: 1734035163278,
              name: 'teste6',
              url: null,
              image: 'https://cms-gazzconecta.s3.amazonaws.com/gazzconecta/2024/12/12150817/whats-home.png',
            },
            {
              id: 1734035165614,
              name: 'teste7',
              url: null,
              image: 'https://cms-gazzconecta.s3.amazonaws.com/gazzconecta/2024/12/12150812/whats-CAPA.png',
            },
            {
              id: 1734035168418,
              name: 'teste8',
              url: null,
              image: 'https://cms-gazzconecta.s3.amazonaws.com/gazzconecta/2024/12/12150042/guilherme-rainner.png',
            },
            {
              id: 1734035171060,
              name: 'teste9',
              url: null,
              image:
                'https://cms-gazzconecta.s3.amazonaws.com/gazzconecta/2024/12/12114250/gemini__hero_16-9-%402x-scaled.jpg',
            },
            {
              id: 1734035174011,
              name: 'teste10',
              url: null,
              image:
                'https://cms-gazzconecta.s3.amazonaws.com/gazzconecta/2024/12/12102721/Erica-Marques-Google-Divulgacao-HOME-1.png',
            },
          ],
        }}
      ></SponsorsBasic>
    </div>
  );
}
