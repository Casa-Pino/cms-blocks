import { useEffect, useState } from 'react';

const InstagramEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    1;
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  let id = RegExp(/\/.+\/(.+)\/(.+)\/$/).exec(url);

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
      className="instagram-media instagram-media-rendered mx-auto max-w-[431px] px-4"
      id="instagram-embed-2"
      src={`https://www.instagram.com/${id[1]}/${id[2]}/embed/?cr=1&amp;v=14&amp;wp=540&amp;rd=https%3A%2F%2Fsalzmedia.com&amp;rp=%2Finstagram-embed%2F#%7B%22ci%22%3A2%2C%22os%22%3A8031.5%2C%22ls%22%3A5511.099999997765%2C%22le%22%3A7767.099999997765%7D`}
      allowTransparency={true}
      allowFullScreen={true}
      frameBorder="0"
      width={windowSize}
      data-instgrm-payload-id="instagram-media-payload-2"
      scrolling="no"
    ></iframe>
  );
};

export default InstagramEmbed;
