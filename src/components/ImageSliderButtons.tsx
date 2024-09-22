import angleLeft from "../assets/images/icon-angle-left.svg";
import angleRight from "../assets/images/icon-angle-right.svg";
import { useImageSlider } from "../context/ImageSliderContext";

export default function ImageSliderButtons() {
  const {
    handlePreviousButtonClick,
    handleNextButtonClick,
    isAnimating,
  } = useImageSlider();


  return (
    <section className="flex items-center bg-black">
      <button
        className="py-5 bg-black px-7 hover:bg-veryDarkGray focus-visible:bg-darkGray xl:py-9 xl:px-10"
        onClick={handlePreviousButtonClick}
        disabled={isAnimating}
      >
        <span className="sr-only">Previos image</span>
        <img src={angleLeft} alt="Left arrow" />
      </button>
      <button
        className="py-5 bg-black px-7 hover:bg-veryDarkGray focus-visible:bg-darkGray xl:py-9 xl:px-10"
        onClick={handleNextButtonClick}
        disabled={isAnimating}
      >
        <span className="sr-only">Next image</span>
        <img src={angleRight} alt="Right arrow" />
      </button>
    </section>
  );
}
