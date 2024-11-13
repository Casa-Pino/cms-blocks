'use client';

import React, { FC, useEffect, useState } from 'react';
import { wrap } from 'popmotion';
import { AnimatePresence, motion } from 'framer-motion';
import ImageComponent from './Image';

interface IBannerSlide {
  posts?: {
    id: number;
    externalId: number;
    uri: string;
    title: string;
    slug: string;
    thumbnail?: string;
    mobileImage?: string;
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
  staticUrl?: string;
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function BannerSlide(props: IBannerSlide) {
  if (props?.posts.length === 0 || props?.posts == undefined) return;
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, props?.posts.length, page);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const isMobile = props?.posts.some(x => !!x.mobileImage);

  useEffect(() => {
    let timerId;
    if (!paused) {
      timerId = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
      // console.log(timerId);
    }

    return function cleanup() {
      // console.log(`Clearing ${timerId}`);
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
    <>
      <div className={`${isMobile ? 'md:hidden' : 'hidden'} h-[450px] relative flex flex-col w-screen items-center justify-start overflow-hidden mt-8`}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className=""
            key={page}
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
            // onClick={(e) => {
            //   // console.log(isMoving);
            //   if (isMoving) return;
            //   var rect = (e.target as any).getBoundingClientRect();
            //   var x = e.clientX - rect.left;
            //   var y = e.clientY - rect.top;

            //   if (x <= 80) {
            //     paginate(-1);
            //     setDuration(0);
            //   } else if (x >= e.currentTarget.offsetWidth - 80) {
            //     paginate(1);
            //     setDuration(0);
            //   } else if (x >= 50 && x <= e.currentTarget.offsetWidth - 80) {
            //     window.open(props?.posts[imageIndex].uri, '_self');
            //   }
            // }}
            onDrag={(e: any) => {
              e.target.style.cursor = 'grabbing';
              setIsMoving(true);
            }}
            onDragEnter={() => {
              setIsMoving(true);
            }}
            onDragEnd={(e: any, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
                setDuration(0);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
                setDuration(0);
              }
              setIsMoving(false);
              e.target.style.cursor = 'pointer';
            }}
          >
            <div className="flex items-center w-[calc(100vw-16px)]">
              <div
                className="absolute z-10 left-0 w-[100vw] mt-[276px] flex flex-row justify-between"
              >
                <div
                  className="text-white bg-gray-500/50 rounded-full"
                  onClick={() => {
                    paginate(-1);
                    setDuration(0);
                  }}
                >
                  <svg width="48" height="48" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                  </svg>
                </div>
                <div
                  className="text-white bg-gray-500/50 rounded-full"
                  onClick={() => {
                    paginate(1);
                    setDuration(0);
                  }}
                >
                  <svg width="48" height="48" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                  </svg>
                </div>
              </div>
              <ImageComponent
                imageStaticUrl={props.staticUrl}
                src={props?.posts[imageIndex].mobileImage || props?.posts[imageIndex].thumbnail || ''}
                alt=""
                width={640}
                height={480}
                className="absolute mt-[300px] h-[300px] left-0 w-full object-contain transition-all duration-700 rounded-md"
              ></ImageComponent>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-[300px] flex h-[150px] w-full overflow-hidden">
          <div className='flex flex-col justify-end'>
            <a
              href={props?.posts[imageIndex].uri}
            >
              <span className="text-sm font-light text-black">{props?.posts[imageIndex].category}</span>
            </a>
            <div className="my-2"></div>
            <a
              href={props?.posts[imageIndex].uri}
            >
              <span className='flex-1 text-xl font-semibold  text-gray-900'>{props?.posts[imageIndex].title}</span>
            </a>
            <div className="my-2"></div>
            <div style={{ width: 'calc(100vw - 32px)' }} className="flex justify-center gap-2">
              {props?.posts.map((x, i) => (
                <div
                  className="flex overflow-hidden transition-all"
                  onClick={() => {
                    setPage([i, i > page ? 1 : -1]);
                    setDuration(0);
                  }}
                  style={{
                    borderRadius: 10,
                    width: 10,
                    height: '10px',
                    backgroundColor: '#000',
                  }}
                >
                  {imageIndex == i || imageIndex > i ? (
                    <div
                      className="transition-all"
                      style={{
                        width: imageIndex == i ? `calc((100% * ${duration}) / 10)` : '100%',
                        height: '100%',
                        backgroundColor: 'silver',
                      }}
                    ></div>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
            <div className="hidden md:flex flex gap-2">
              {props?.posts.map((x, i) => (
                <div
                  className="flex overflow-hidden transition-all"
                  onClick={() => {
                    setPage([i, i > page ? 1 : -1]);
                    setDuration(0);
                  }}
                  style={{
                    borderRadius: 10,
                    width: `calc(100% / ${props?.posts.length})`,
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
        </div>
      </div>
      <div className={`${isMobile ? 'hidden md:flex ' : ''}click-tm group relative flex h-screen max-h-[600px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl`}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className=" absolute top-0 left-0 right-0 h-full w-full"
            key={page}
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
            // onClick={(e) => {
            //   // console.log(isMoving);
            //   if (isMoving) return;
            //   var rect = (e.target as any).getBoundingClientRect();
            //   var x = e.clientX - rect.left;
            //   var y = e.clientY - rect.top;

            //   if (x <= 80) {
            //     paginate(-1);
            //     setDuration(0);
            //   } else if (x >= e.currentTarget.offsetWidth - 80) {
            //     paginate(1);
            //     setDuration(0);
            //   } else if (x >= 50 && x <= e.currentTarget.offsetWidth - 80) {
            //     window.open(props?.posts[imageIndex].uri, '_self');
            //   }
            // }}
            onDrag={(e: any) => {
              e.target.style.cursor = 'grabbing';
              setIsMoving(true);
            }}
            onDragEnter={() => {
              setIsMoving(true);
            }}
            onDragEnd={(e: any, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
                setDuration(0);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
                setDuration(0);
              }
              setIsMoving(false);
              e.target.style.cursor = 'pointer';
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-20 h-full w-full bg-image"></div>
            <ImageComponent
              imageStaticUrl={props.staticUrl}
              src={props?.posts[imageIndex].thumbnail || ''}
              alt={''}
              fill
              className="absolute top-0 left-0 right-0 z-10 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
              imageSizeW={1080}
            ></ImageComponent>
          </motion.div>
        </AnimatePresence>
        <div className="absolute z-50 flex h-full w-full">
          <div
            className="flex h-full w-1/6 items-center justify-center"
            onClick={() => {
              paginate(-1);
              setDuration(0);
            }}
          >
            <svg
              width="46"
              height="46"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg md:hidden"
            >
              <path d="M19 12H5"></path>
              <path d="m12 19-7-7 7-7"></path>
            </svg>
          </div>
          <a href={props?.posts[imageIndex].uri} className="h-full w-4/6"></a>
          <div
            className="flex h-full w-1/6 items-center justify-center"
            onClick={() => {
              paginate(1);
              setDuration(0);
            }}
          >
            <svg
              width="46"
              height="46"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg md:hidden"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
          <div className="absolute bottom-2 flex max-w-xl flex-col justify-end px-4 pb-2 sm:max-h-40">
            <a
              href={props?.posts[imageIndex].uri}
              className="text-xl font-bold text-white drop-shadow-[0_2px_1px_rgba(0,0,0,0.25)]"
            >
              {props?.posts[imageIndex].category}
            </a>
            <div className="my-2"></div>
            <a
              href={props?.posts[imageIndex].uri}
              className=" overflow-ellipsis text-2xl font-bold text-white drop-shadow-[0_2px_1px_rgba(0,0,0)]"
            >
              {props?.posts[imageIndex].title}
            </a>
            <div className="my-2"></div>
            <div className="flex gap-2">
              {props?.posts.map((x, i) => (
                <div
                  className="flex overflow-hidden transition-all"
                  onClick={() => {
                    setPage([i, i > page ? 1 : -1]);
                    setDuration(0);
                  }}
                  style={{
                    borderRadius: 10,
                    width: `calc(100% / ${props?.posts.length})`,
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
        </div>
      </div>
    </>
  );
}