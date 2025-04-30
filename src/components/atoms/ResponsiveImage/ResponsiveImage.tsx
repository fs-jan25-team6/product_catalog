import React from 'react';

interface ResponsiveImageProps {
  alt: string;
  desktopSrc: string;
  tabletSrc: string;
  mobileSrc: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  alt,
  desktopSrc,
  tabletSrc,
  mobileSrc,
}) => {
  return (
    <picture>
      <source media="(min-width: 1200px)" srcSet={desktopSrc} />
      <source media="(min-width: 640px)" srcSet={tabletSrc} />
      <img src={mobileSrc} alt={alt} />
    </picture>
  );
};
