import React, { useEffect, useState } from 'react';

export default function TiktokEmbed({ url }: { url: string }) {
  let id = RegExp(/(\d+)$/).exec(url)[0];

  let [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    let eventListener = () => {
      setWindowSize(window.innerWidth);
    };
    eventListener();
    window.addEventListener('resize', eventListener);
    return () => {
      window.removeEventListener('resize', eventListener);
    };
  }, []);

  return (
    <iframe
      width={windowSize}
      height={windowSize}
      className="max-h-[631px] max-w-[631px] px-4"
      src={`https://www.tiktok.com/player/v1/${id}?&amp;music_info=1&amp;description=1`}
      allow="fullscreen"
      title="test"
    ></iframe>
  );
}
