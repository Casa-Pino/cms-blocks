'use client';

import Image, { ImageProps } from 'next/image';
import React, { FC } from 'react';

interface IImageProps extends ImageProps {
  imageSizeW?: number;
  imageSizeH?: number;
  imageStaticUrl?: string;
}

const ImageComponent = (props: IImageProps): React.ReactElement<IImageProps> => {
  return (
    <Image
      {...props}
      alt={props.alt}
      loader={({ src, width: w, quality }) => {
        const q = quality || 75;
        return !src.includes('https://')
          ? src
          : `${
              !!props.imageStaticUrl
                ? props.imageStaticUrl.endsWith('/')
                  ? props.imageStaticUrl.slice(0, -1)
                  : props.imageStaticUrl
                : 'https://static.pinolab.com.br'
            }/?${src != null ? `u=${src}&` : ''}${!!props.imageSizeH ? 'h' : 'w'}=${
              !!props.imageSizeH
                ? props.imageSizeH.toString()
                : props.imageSizeW
                ? props.imageSizeW.toString()
                : w != null
                ? w > 400 && w <= 1080
                  ? w
                  : '480'
                : '480'
            }`;
      }}
    />
  );
};

export default ImageComponent;
