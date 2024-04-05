'use client';

import { DetailtsView, LastNews, CategoriesHeader, PostView, NewsLetterView, Sponsors } from '../../../lib';

const block = {
  name: 'fbg-plugin/postview',
  props: {
    post: {
      id: 1712259834888,
      externalId: 104105,
      uri: '/agenda/evento-gratuito-traz-palestras-e-dinamicas-para-conscientizar-sobre-o-parkinson/',
      title: 'Evento gratuito traz palestras e dinâmicas para conscientizar sobre o Parkinson',
      slug: 'evento-gratuito-traz-palestras-e-dinamicas-para-conscientizar-sobre-o-parkinson',
      thumbnail: 'https://static.casapino.com.br/casapino/2024/04/04165342/inc-evento-aparkinson-home.png',
      category: 'Agenda',
      credit: [],
      createdAt: '2024-04-04T15:57:59',
    },
  },
  content: '<div class="wp-block-fbg-plugin-postview"></div>',
  credit: [
    {
      id: 2403,
      name: 'Equipe Pinó',
      slug: 'equipe-pino',
      url: false,
      description: '',
    },
  ],
};

export default function Home() {
  return (
    <div className="w-full">
      <PostView
        postContentClass="mb-9"
        buttonClass="gap-8"
        sendLike={async (e) => {}}
        likes={0}
        noThumbnail={false}
        uri={block.props.post?.uri}
        title={block.props.post?.title}
        slug={block.props.post?.slug}
        thumbnail={block.props.post?.thumbnail}
        category={block.props.post?.category}
        isHeightFull
        credit={[]}
        id={block.props.post?.externalId}
        errorSrc="/assets/icons/logo.ico"
      />
    </div>
  );
}
