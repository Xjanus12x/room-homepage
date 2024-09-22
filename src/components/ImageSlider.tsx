import React from "react";
import { useImageSlider } from "../context/ImageSliderContext";

export default function ImageSlider() {
  const { images, activeIndex, setIsAnimating } = useImageSlider();
  return (
    <div className="flex w-full h-full overflow-x-hidden">
      {images.map(({ mobileImg, desktopImg }, i) => {
        return (
          <Image
            mobileImgPath={mobileImg}
            desktopImgPath={desktopImg}
            activeIndex={activeIndex}
            setIsAnimating={setIsAnimating}
            key={i}
          />
        );
      })}
    </div>
  );
}

type ImageProps = {
  mobileImgPath: string;
  desktopImgPath: string;
  activeIndex: number;
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
};
function Image({
  mobileImgPath,
  desktopImgPath,
  activeIndex,
  setIsAnimating,
}: ImageProps) {
  return (
    <picture
      className="w-full h-full transition-transform duration-300 grow-0 shrink-0"
      style={{ transform: `translateX(${-100 * activeIndex}%)` }}
      onTransitionEnd={() => setIsAnimating(false)}
    >
      <source media="(min-width: 768px)" srcSet={`${desktopImgPath}, `} />
      <img
        className="object-cover object-center w-full h-full "
        src={mobileImgPath}
      />
    </picture>
  );
}
