import styled, { keyframes } from "styled-components";

export const pulseBack = keyframes`
  50% {transform : translateX(-10px);}
`;

export const pulseNext = keyframes`
  50% {transform : translateX(10px);}
`;

export const ImageSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
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

    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SliderImages = styled.img<{ isCurrent: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isCurrent }) => (isCurrent ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const SliderButton = styled.button`
  position: absolute;
  bottom: 5%;
  font-size: 2rem;
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  transition: opacity 0.3s;
  z-index: 2;

  @media (min-width: 768px) {
    bottom: 30%;
  }

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
