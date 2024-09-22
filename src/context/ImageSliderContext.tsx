import { createContext, PropsWithChildren, useContext, useState } from "react";
import mobileImgHero1 from "../assets/images/mobile-image-hero-1.jpg";
import mobileImgHero2 from "../assets/images/mobile-image-hero-2.jpg";
import mobileImgHero3 from "../assets/images/mobile-image-hero-3.jpg";

import desktopImgHero1 from "../assets/images/desktop-image-hero-1.jpg";
import desktopImgHero2 from "../assets/images/desktop-image-hero-2.jpg";
import desktopImgHero3 from "../assets/images/desktop-image-hero-3.jpg";

type sliderImagesPaths = {
  mobileImg: string;
  desktopImg: string;
};

type heroTextData = {
  headline: string;
  description: string;
};

type ImageSliderContext = {
  heroText: heroTextData[];
  images: sliderImagesPaths[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  handlePreviousButtonClick: () => void;
  handleNextButtonClick: () => void;
  isAnimating: boolean;
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
};

const ImageSliderContext = createContext<ImageSliderContext | null>(null);

const images: sliderImagesPaths[] = [
  {
    mobileImg: mobileImgHero1,
    desktopImg: desktopImgHero1,
  },
  {
    mobileImg: mobileImgHero2,
    desktopImg: desktopImgHero2,
  },
  { mobileImg: mobileImgHero3, desktopImg: desktopImgHero3 },
];

const heroText: heroTextData[] = [
  {
    headline: "Discover inovative ways to decorate",
    description:
      " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    headline: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    headline: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advance technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

export function useImageSlider() {
  const context = useContext(ImageSliderContext);

  if (!context) {
    throw new Error(
      "useImageSlider must be used within an ImageSliderProvider"
    );
  }

  return {
    heroText,
    images,
    activeIndex: context.activeIndex,
    setActiveIndex: context.setActiveIndex,
    handlePreviousButtonClick: context.handlePreviousButtonClick,
    handleNextButtonClick: context.handleNextButtonClick,
    isAnimating: context.isAnimating,
    setIsAnimating: context.setIsAnimating,
  };
}

export function useHeroText() {
  const context = useContext(ImageSliderContext);

  if (!context) {
    throw new Error(
      "useImageSlider must be used within an ImageSliderProvider"
    );
  }
}

export default function ImageSliderProvider({ children }: PropsWithChildren) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const handlePreviousButtonClick = () => {
    setIsAnimating(true);
    setActiveIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  const handleNextButtonClick = () => {
    setIsAnimating(true);
    setActiveIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };
  return (
    <ImageSliderContext.Provider
      value={{
        heroText,
        images,
        activeIndex,
        setActiveIndex,
        handlePreviousButtonClick,
        handleNextButtonClick,
        isAnimating,
        setIsAnimating,
      }}
    >
      {children}
    </ImageSliderContext.Provider>
  );
}
