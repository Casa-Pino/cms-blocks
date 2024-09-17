'use client';

import { BannerSlide, CarrouselSliderTop } from '../../../lib';
// import CarrouselSliderTop from '../../../lib/CarrouselSliderTop';

export default function Home() {
  return (
    <div className="w-full max-w-7xl">
      <CarrouselSliderTop
        items={[
          {
            name: 'Teste',
            imageUrl: 'https://i3.ytimg.com/vi/VLSWyTmM2ro/hqdefault.jpg',
            imageErrorUrl: 'https://i3.ytimg.com/vi/VLSWyTmM2ro/hqdefault.jpg',
            link: 'https://i3.ytimg.com/vi/VLSWyTmM2ro/hqdefault.jpg',
          },
          {
            name: 'Teste',
            imageUrl: 'https://i3.ytimg.com/vi/VLSWyTmM2ro/hqdefault.jpg',
            imageErrorUrl: 'https://i3.ytimg.com/vi/VLSWyTmM2ro/hqdefault.jpg',
            link: 'https://i3.ytimg.com/vi/VLSWyTmM2ro/hqdefault.jpg',
          },
          {
            name: 'Teste',
            imageUrl: 'https://i3.ytimg.com/vi/VLSWyTmM2ro/hqdefault.jpg',
            imageErrorUrl: 'https://i3.ytimg.com/vi/VLSWyTmM2ro/hqdefault.jpg',
            link: 'https://i3.ytimg.com/vi/VLSWyTmM2ro/hqdefault.jpg',
          },
          {
            name: 'Teste',
            imageUrl: 'https://i3.ytimg.com/vi/VLSWyTmM2ro/hqdefault.jpg',
            imageErrorUrl: 'https://i3.ytimg.com/vi/VLSWyTmM2ro/hqdefault.jpg',
            link: 'https://i3.ytimg.com/vi/VLSWyTmM2ro/hqdefault.jpg',
          },
        ]}
      ></CarrouselSliderTop>
    </div>
  );
}
