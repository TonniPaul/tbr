import { useState, useEffect, useRef } from "react";
import {
  ImageSliderContainer,
  ImageContainer,
  SliderImages,
  PrevButton,
  NextButton,
  SliderActiveButtons,
  Dots,
  SliderImageContainer,
} from "./imageSlider.styles";
import Image from "next/image";

type ImageSliderProps = {
  images: string[];
};

const SWIPE_THRESHOLD = 50;

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prevImage = () =>
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );

  const nextImage = () =>
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextImage, prevImage]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartX.current) {
      return;
    }
    const touchEndX = e.touches[0].clientX;
    const swipeDistance = touchEndX - touchStartX.current;
    if (Math.abs(swipeDistance) >= SWIPE_THRESHOLD) {
      const swipeDirection = swipeDistance > 0 ? "right" : "left";
      if (swipeDirection === "right") {
        prevImage();
      } else {
        nextImage();
      }
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  return (
    <div>
      <ImageSliderContainer>
        <PrevButton onClick={prevImage}>
          <Image
            src="/assets/previous.png"
            alt="prev-button"
            width={30}
            height={30}
          />
        </PrevButton>
        <ImageContainer
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <SliderImageContainer>
            {images.map((imageUrl, index) => (
              <SliderImages
                key={imageUrl}
                src={imageUrl}
                alt={`Image ${index}`}
                width={1023}
                height={600}
                isCurrent={index === currentImageIndex}
              />
            ))}
          </SliderImageContainer>
        </ImageContainer>
        <h1>Shop Quality Thrift Wears, Bags and Accessories.</h1>
        <NextButton onClick={nextImage}>
          {" "}
          <Image
            src="/assets/next.png"
            alt="prev-button"
            width={30}
            height={30}
          />
        </NextButton>
      </ImageSliderContainer>
      <SliderActiveButtons>
        {images.map((dots, index) => (
          <Dots
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            isCurrent={index === currentImageIndex}
          ></Dots>
        ))}
      </SliderActiveButtons>
    </div>
  );
};

export default ImageSlider;
