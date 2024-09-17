'use client';

import React from 'react';
import ImageComponent from './Image';

type ICarrouselItem = {
  color?: string;
  name: string;
  imageUrl: string;
  imageErrorUrl: string;
  staticUrl?: string;
  link: string;
};

function CarrouselItem({ link, color, name, imageErrorUrl, imageUrl, staticUrl }: ICarrouselItem) {
  return (
    <a href={link} className="flex flex-col items-center gap-2">
      <div
        className={`relative h-[94px] w-[94px] overflow-hidden rounded-full border-4 ${
          color ? `border-[${color}]` : 'border-[#00DFEB]'
        }`}
      >
        <ImageComponent
          src={imageUrl}
          fill
          className="h-full w-full object-cover object-center"
          alt={name}
          //   objectFit="cover"
          placeholder="blur"
          imageStaticUrl={staticUrl}
          blurDataURL={imageErrorUrl}
          onError={(e: any) => {
            e.currentTarget.srcset = imageErrorUrl;
          }}
        ></ImageComponent>
      </div>
      <div className="w-[94px] text-center">{name}</div>
    </a>
  );
}

export default function CarrouselSliderTop({ items }: { items: ICarrouselItem[] }) {
  return (
    <div className="flex w-full items-center gap-6 overflow-x-auto pl-2">
      {items.map((x, y) => {
        return <CarrouselItem key={y} {...x} />;
      })}
    </div>
  );
}
