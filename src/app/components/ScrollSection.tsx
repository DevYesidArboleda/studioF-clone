"use client"
// components/ScrollSection.tsx
import React, { useEffect, useRef, useState } from 'react';

interface ScrollSectionProps {
  backgroundImage: string;
  images: string[];
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ backgroundImage, images }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  const totalRows = Math.ceil(images.length / 2);
  const maxTranslateY = 100; // Maximum translation in percentage

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        const scrollPercentage = Math.max(0, Math.min(1, -top / (height - window.innerHeight)));
        setScrollPosition(scrollPercentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    imageRefs.current.forEach((imageRef, index) => {
      if (imageRef) {
        const rowIndex = Math.floor(index / 2);
        const rowProgress = Math.max(0, Math.min(1, scrollPosition * totalRows - rowIndex));
        
        const translateY = -rowProgress * (maxTranslateY / totalRows);
        const rotate = rowProgress * 7.00001;
        
        imageRef.style.transform = `translate(0%, ${translateY}%) translate3d(0px, 0px, 0px) rotate(${rotate}deg)`;
        
      }
    });
  }, [scrollPosition, images.length, totalRows]);

  const setImageRef = (el: HTMLDivElement | null, index: number) => {
    imageRefs.current[index] = el;
  };

  return (
    <div 
      ref={sectionRef}
      className="relative w-full"
      style={{
        height: `${totalRows * 100}vh`,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="grid grid-cols-2 justify-items-center content-center h-screen max-w-4xl mx-auto flex flex-wrap absolute w-6/12 right-0 top-[50%]">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el)=> setImageRef(el, index)}
              className="relative flex items-center justify-center transition-all duration-300 ease-out p-4 bg-white"
              style={{
                width: '328px',
                height: '469px',
              }}
            >
              <img 
                src={image} 
                alt={`Scrolling image ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;