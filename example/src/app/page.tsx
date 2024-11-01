'use client';

import { BannerSlide, CarrouselSliderTop, LastNews } from '../../../lib';
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
      <div className="">
        <LastNews
          horizontal={false}
          lastNews={a as any}
          displayFeaturedImage
          addLinkToFeaturedImage
          featuredImageAlign="left"
          sendLike={async (e: any) => {}}
          Logo={
            <img
              src="/assets/icons/logo.ico"
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            ></img>
          }
          displayAuthor
          errorSrc="/assets/icons/logo.ico"
        ></LastNews>
      </div>
    </div>
  );
}
