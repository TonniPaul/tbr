import ImageSlider from "../ImageSlider/ImageSlider"

const images = [
  "/assets/thrift-1.avif",
  "/assets/thrift-2.avif",
  "/assets/hanger.jpg",
];

const Hero = () => {
  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
}

export default Hero