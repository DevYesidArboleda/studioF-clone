// components/FullWidthBanner.tsx
import React from 'react';

interface FullWidthBannerProps {
  backgroundImage: string;
  text: string;
}

const FullWidthBanner: React.FC<FullWidthBannerProps> = ({ backgroundImage, text }) => {
  return (
    <div 
      className=" w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-white items-center justify-center flex flex-col gap-5 text-center max-w-4xl px-4 bg-white h-[80vh] md:absolute rounded-[10px] md:w-[30%] md:right-[6%]">
        <img 
                src={"/hues-of-paradise-treasure-kv.png"} 
                className="w-full object-cover"
              />
        <p className="text-base md:text-lg font-light leading-relaxed text-[rgb(140_95_30_/_var(--tw-text-opacity))] ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default FullWidthBanner;