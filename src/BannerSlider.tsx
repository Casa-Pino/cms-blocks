'use client';

import React, { FC, useEffect, useState } from 'react';
import { wrap } from 'popmotion';
import { AnimatePresence, motion } from 'framer-motion';

interface IBannerSlide {
  posts: {
    id: number;
    externalId: number;
    uri: string;
    title: string;
    slug: string;
    thumbnail: string;
    category: string;
    credit: {
      id: number;
      name: string;
      slug: string;
      url: string;
    }[];
    createdAt: string;
    showThumbnail: boolean;
  }[];
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function BannerSlide(props: IBannerSlide) {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, props.posts.length, page);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let timerId;
    if (!paused) {
      timerId = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
      console.log(timerId);
    }

    return function cleanup() {
      console.log(`Clearing ${timerId}`);
      clearInterval(timerId);
    };
  }, [paused]);

  useEffect(() => {
    if (duration == 10) {
      setDuration(0);
      paginate(1);
    }
  }, [duration]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative flex h-screen max-h-[600px] w-full items-center justify-center overflow-hidden rounded-xl">
      <div
        className="absolute z-30 flex h-full w-full justify-between"
        style={{
          backgroundColor: '#00000056',
        }}
      >
        <div
          className="h-full w-1/12"
          onClick={() => {
            paginate(-1);
            setDuration(0);
          }}
        ></div>
        <a
          href={`${props.posts[imageIndex].uri}`}
          className="relative flex h-full w-full flex-col items-start justify-end"
        >
          <div className="absolute bottom-4 h-full max-h-[190px] max-w-xl sm:max-h-40">
            <div className="text-xl font-bold text-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)]">
              {props.posts[imageIndex].category}
            </div>
            <div className="my-4"></div>
            <div className="max-h-[90px] overflow-hidden overflow-ellipsis text-2xl font-bold text-white drop-shadow-[0_2px_1px_rgba(0,0,0)]">
              {props.posts[imageIndex].title.length > 75
                ? `${props.posts[imageIndex].title.substring(0, 55) + '...'}`
                : props.posts[imageIndex].title}
            </div>
            <div className="my-4"></div>
            <div className="flex gap-2">
              {props.posts.map((x, i) => (
                <div
                  className="flex overflow-hidden transition-all"
                  style={{
                    borderRadius: 10,
                    width: `calc(100% / ${props.posts.length})`,
                    height: '10px',
                    backgroundColor: '#ffffff30',
                  }}
                >
                  {imageIndex == i || imageIndex > i ? (
                    <div
                      className="transition-all"
                      style={{
                        width: imageIndex == i ? `calc((100% * ${duration}) / 10)` : '100%',
                        height: '100%',
                        backgroundColor: 'white',
                      }}
                    ></div>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </div>
        </a>
        <div
          className="h-full w-1/12"
          onClick={() => {
            paginate(1);
            setDuration(0);
          }}
        ></div>
      </div>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="absolute top-0 left-0 right-0 h-full w-full"
          key={page}
          src={props.posts[imageIndex].thumbnail}
          custom={direction}
          variants={{
            enter: (direction: number) => {
              return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
                objectFit: 'cover',
                objectPosition: 'center',
              };
            },
            center: {
              zIndex: 1,
              x: 0,
              opacity: 1,
              objectFit: 'cover',
              objectPosition: 'center',
            },
            exit: (direction: number) => {
              return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
                objectFit: 'cover',
                objectPosition: 'center',
              };
            },
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
              setDuration(0);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
              setDuration(0);
            }
          }}
        />
      </AnimatePresence>
    </div>
  );
}
