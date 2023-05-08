import styled from "styled-components";
import ImageSlider from "../ImageSlider/ImageSlider";

const images = [
  "/assets/thrift-1.avif",
  "/assets/thrift-2.avif",
  "/assets/hanger.jpg",
];

const HeroContainer = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <ImageSlider images={images} />
    </HeroContainer>
  );
};

export default Hero;
