import arrowIcon from "./assets/images/icon-arrow.svg";
import darkFurniture from "./assets/images/image-about-dark.jpg";
import whiteFurniture from "./assets/images/image-about-light.jpg";

import Nav from "./components/Nav";
import ImageSlider from "./components/ImageSlider";
import ImageSliderButtons from "./components/ImageSliderButtons";

import { useImageSlider } from "./context/ImageSliderContext";

function App() {
  const { heroText, activeIndex } = useImageSlider();
  return (
    <>
      <div className="relative mx-auto md:grid md:grid-cols-2 min-h-dvh xl:max-w-screen-2xl">
        <header className="absolute top-0 z-10 w-full px-6 py-12 md:col-start-1 md:col-end-1 md:px-10 md:py-14">
          <Nav />
        </header>
        <main className="relative grid lg:grid-cols-2 md:col-span-2">
          <section>
            <ImageSlider />
          </section>
          <section className="px-8 py-12 md:p-24">
            <h1 className="font-bold text-4xl leading-none mb-4 xl:text-5xl xl:max-w-[15ch]">
              {heroText[activeIndex].headline}
            </h1>
            <p className="text-darkGray font-medium xl:text-lg xl:max-w-[45ch]">
              {heroText[activeIndex].description}
            </p>

            <p className=" uppercase flex items-center font-semibold tracking-[.5em] gap-4 mt-8 xl:text-xl xl:mt-5 cursor-pointer hover:opacity-50">
              Shop now
              <span>
                <img src={arrowIcon} alt="Arrow icon" aria-hidden />
              </span>
            </p>
          </section>
          <section className="absolute bottom-0 right-0 row-start-1 row-end-1 lg:right-auto lg:col-start-2 lg:left-0">
            <ImageSliderButtons />
          </section>

          <section className="grid lg:col-span-full lg:grid-cols-3">
            <img
              className="object-cover min-w-full min-h-full"
              src={darkFurniture}
              alt="Furniture image"
            />

            <section className="grid content-center min-w-full min-h-full px-8 py-12 space-y-3 xl:px-12">
              <h2 className="uppercase font-bold tracking-[.3em] md:text-xl">
                About our furniture
              </h2>
              <p className="font-medium text-darkGray">
                Our multifuntional collection blends design and function to suit
                your individual taste. Make each room unique, or pick a cohesive
                theme that best express your interest and what inspires you.
                Find the furniture pieces you need, from traditional to
                contemporary styles or anything in between. Product specialist
                are available to help you create your dream space.
              </p>
            </section>

            <img
              className="object-cover min-w-full min-h-full"
              src={whiteFurniture}
              alt="White furniture image"
            />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
