import { useState, useEffect } from "react";
import {
  ImageSliderContainer,
  ImageContainer,
  SliderImages,
  PrevButton,
  NextButton,
} from "./imageSlider.styles";

type ImageSliderProps = {
  images: string[];
};

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <ImageSliderContainer>
      <PrevButton onClick={prevImage}>{"<"}</PrevButton>
      <ImageContainer>
        {images.map((imageUrl, index) => (
          <SliderImages
            key={imageUrl}
            src={imageUrl}
            alt={`Image ${index}`}
            isCurrent={index === currentImageIndex}
          />
        ))}
      </ImageContainer>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
      <NextButton onClick={nextImage}>{">"}</NextButton>
    </ImageSliderContainer>
  );
};

export default ImageSlider;
