/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BsHandThumbsUp, BsHandThumbsUpFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { setCookie, getCookie } from 'cookies-next';

import ImageComponent from './Image';
import classNames from 'classnames';

export interface IPostViewProps {
  id: number;
  uri: string;
  title: string;
  slug: string;
  noThumbnail: boolean;
  thumbnail: string;
  category: string;
  credit: ICreditProps[];
  likes: number;
  hat?: string;
  sendLike: (e: any) => Promise<void>;
  errorSrc: string;
  postContentClass?: string;
  buttonClass?: string;
  imageStaticUrl?: string;
  isHeightFull?: boolean;
}
export interface ICreditProps {
  id: number;
  name: string;
  slug: string;
  url: string;
}
export default function PostView({
  uri,
  title,
  slug,
  thumbnail,
  noThumbnail,
  category,
  credit,
  id,
  hat,
  likes,
  sendLike,
  errorSrc,
  postContentClass,
  buttonClass,
  imageStaticUrl,
  isHeightFull = false,
}: IPostViewProps) {
  let [isDocument, setDocument] = useState(false);
  let [liked, setLiked] = useState(false);

  const getCookies = () => (isDocument ? getCookie('likes') : '[]'),
    sendData = async (x: FormData) => {
      const l = JSON.parse(getCookies() || '[]'),
        postId = +(x.get('postId')?.toString() || 0);
      sendLike({
        postId,
        siteId: process.env.HERMES_DOMAIN_ID || 'gazzconecta',
        like: !l.includes(postId),
      });
      if (!!l.includes(postId)) l.splice(l.indexOf(postId), 1);
      else l.push(postId);
      setIlikes(l);
      setCookie('likes', JSON.stringify(l));
      router.refresh();

      return false;
    },
    router = useRouter(),
    [ilikes, setIlikes] = useState<number[]>(
      [],
      // JSON.parse(getCookies()['likes'] || '[]')
    ),
    [imageWorking, setImageWorkin] = useState(true),
    [likesData, setLikesData] = useState(likes);

  useEffect(() => {
    if (ilikes.length && likes == 0) {
      setLikesData(1);
    } else {
      setLikesData(likes);
    }

    if (ilikes.includes(id || 0)) {
      setLiked(true);
    }
  }, [likes]);

  useEffect(() => {
    if (document != undefined) {
      setDocument(true);
      let cookiesData = getCookie('likes');
      let cookiesLike = cookiesData ? JSON.parse(cookiesData) : [];
      setIlikes(cookiesLike);

      if (cookiesLike.includes(id)) {
        setLiked(true);
      }
    }
  }, []);

  return (
    <div
      className={classNames('flex w-full flex-col', postContentClass ?? 'my-9')}
      style={{
        minWidth: '100%',
      }}
    >
      <a href={uri || ''}>
        <div
          className="mb-5"
          style={{
            height: !isHeightFull ? 'calc(100dvh * 0.4)' : 'auto',
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <ImageComponent
            src={thumbnail || ''}
            alt=""
            width={!isHeightFull ? 1000 : 0}
            imageSizeW={1080}
            // fill={isHeightFull}
            height={!isHeightFull ? 454 : 0}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'contain',
            }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.srcset = errorSrc;
              e.currentTarget.src = errorSrc;
            }}
            loading="lazy"
            blurDataURL={errorSrc}
            placeholder="blur"
            imageStaticUrl={imageStaticUrl}
          />
        </div>
      </a>
      <div className="flex flex-col">
        <a href={uri ?? ''}>
          <div className="mb-6">
            <p className="subtitle">{hat || category || ''}</p>
            <p className="heading-blue">
              <span>{title || ''}</span>
            </p>
          </div>
        </a>
        <div className={classNames('flex items-center justify-between', buttonClass)}>
          <div className="flex items-center">
            {!!credit && credit.length && (
              <div className="user-image mr-1.5" style={{ position: 'relative' }}>
                <ImageComponent
                  src={credit[0].url}
                  alt=""
                  fill
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.srcset = errorSrc;
                    e.currentTarget.src = errorSrc;
                  }}
                  loading="lazy"
                  blurDataURL={errorSrc}
                  placeholder="blur"
                  imageStaticUrl={imageStaticUrl}
                />
              </div>
            )}
            <div className="flex cursor-default flex-row gap-2 text-base font-light" style={{ color: '#6c6c6c' }}>
              {credit?.map((x) => (
                <span key={x.id}>{x.name}</span>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendData(new FormData(e.currentTarget));
            }}
            method="post"
            encType="multipart/form-data"
            className="flex items-center"
          >
            <input type="hidden" value={id} name="postId"></input>
            <button
              type="submit"
              className="flex cursor-pointer items-center"
              onClick={(e) => {
                setLiked(true);
              }}
            >
              {(likes >= 5 || likesData >= 5) && <p className="mr-1.5">{likes == 0 ? likesData : likes}</p>}
              {liked ? <BsHandThumbsUpFill></BsHandThumbsUpFill> : <BsHandThumbsUp></BsHandThumbsUp>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
