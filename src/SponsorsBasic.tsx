'use client';

import ImageComponent from './Image';
import classNames from 'classnames';

interface ISponsor {
  color?: string;
  backgroundColor?: string;
  sponsors: Array<{
    id?: number;
    name?: string;
    url?: string;
    image?: string;
  }>;
  classData?: string;
  imageStaticUrl?: string;
  errorImage?: string;
}

export default function SponsorsBasic({
  sponsors,
  color,
  backgroundColor,
  classData,
  imageStaticUrl,
  errorImage,
}: ISponsor) {
  return (
    <div className={classNames('relative my-4', classData)}>
      <p className="relative -bottom-4 mx-4 text-[27px] font-medium ">Parceiros</p>
      <div
        className={`flex h-auto min-h-[170px] w-full flex-wrap justify-around rounded-[5px]  py-4 md:min-h-[189px]`}
        style={{
          columnGap: '6px',
          rowGap: '6px',
          backgroundColor: !!backgroundColor ? backgroundColor : '#E9E9E9',
        }}
      >
        {sponsors.map((x, y: number) => {
          return (
            <div className="flex w-[109px] flex-col items-center justify-around" key={y}>
              <a href={x?.url || null} target="_blank" rel="noopener noreferrer">
                <div className="relative h-[94px] min-h-[94px] w-[94px] rounded-full bg-white object-cover">
                  <ImageComponent
                    className=" rounded-full"
                    src={x?.image || ''}
                    fill
                    alt={x?.name || ''}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                    }}
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={errorImage}
                    imageStaticUrl={imageStaticUrl}
                  ></ImageComponent>
                </div>
                <div className={`text-center ${!!color ? `text-[${color}]` : ''}`}>{x?.name}</div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
