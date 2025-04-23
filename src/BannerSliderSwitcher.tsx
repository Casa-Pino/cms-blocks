import React from 'react';
import BannerSlide from './BannerSlider';
import classNames from 'classnames';
import LastNews from './LastNews';

export default function BannerSliderSwitcher(props: any) {
  const haveMobileLayout = 'mobileLayout' in props;
  const mobileLayoutVert = haveMobileLayout && props?.mobileLayout == 'postlist-vertical';
  const mobileLayoutHori = haveMobileLayout && props?.mobileLayout == 'postlist-horizontal';

  return (
    <div>
      {mobileLayoutVert ? (
        <div className="md:hidden">
          <LastNews {...props}></LastNews>
        </div>
      ) : (
        <></>
      )}
      {mobileLayoutHori ? (
        <div className="md:hidden">
          <LastNews {...props} horizontal></LastNews>
        </div>
      ) : (
        <></>
      )}
      <div className={classNames(haveMobileLayout ? 'hidden md:flex' : '')}>
        <BannerSlide {...props}></BannerSlide>
      </div>
    </div>
  );
}
