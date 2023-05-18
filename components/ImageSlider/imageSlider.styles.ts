import styled, { keyframes } from "styled-components";
import Image from "next/image";

interface ImageSliderStyleProps {
  isCurrent: boolean;
}

export const pulseBack = keyframes`
  50% {transform : translateX(-10px) translateY(-50%);}
`;

export const pulseNext = keyframes`
  50% {transform : translateX(10px) translateY(-50%);}
`;

export const ImageSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  background: black;
  position: relative;

  @media (min-width: 768px) {
    height: 500px;
  }

  & > h1 {
    position: absolute;
    font-size: 2rem;
    background: var(--transparent-bg);
    color: var(--white);
    bottom: 20px;
    right: 40px;
    width: 70%;
    text-align: right;

    @media (min-width: 900px) {
      font-size: 3rem;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SliderHeaderText = styled.h1`
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const SliderImages = styled(Image)<ImageSliderStyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isCurrent }) => (isCurrent ? 1 : 0)};
  transition: 2s ease-in-out;
`;

export const SliderImageContainer = styled.div`
  width: 100vw;
  height: inherit;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  font-size: 2rem;
  border: none;
  background: none;
  cursor: pointer;
  transition: opacity 0.3s;
  z-index: 2;
  filter: var(--white-filter);

  transform: translateY(-50%);

  &:hover {
    opacity: 0.7;
  }
`;

export const PrevButton = styled(SliderButton)`
  left: 20px;
  animation: ${pulseBack} 3s infinite;
`;

export const NextButton = styled(SliderButton)`
  right: 20px;
  animation: ${pulseNext} 3s infinite;
`;
export const SliderActiveButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
`;

export const Dots = styled.span<ImageSliderStyleProps>`
  width: 25px;
  height: 8px;
  background: ${({ isCurrent }) => (isCurrent ? "var(--dark-grey)" : "#ccc")};
  margin: 2rem 0 0;
  border-radius: 3px;
  cursor: pointer;
  transition: 1s ease-in-out;
`;