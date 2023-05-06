import styled from "styled-components";
import Link from "next/link";

interface NavUlProps  {
  number: string;
}

export const HeaderStyle = styled.header`
   overflow: hidden;

  & > div {
    display: flex;
    gap: 10px;
    background: var(--yellow);
    color: var(--black);
    padding: 0.7rem 1rem;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }

  & nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--black);
    color: var(--white);
    padding: 0.5rem 1rem;
    position: relative;

    & button img {
      filter: invert(90%) sepia(99%) saturate(2%) hue-rotate(82deg)
        brightness(108%) contrast(100%);

      @media (min-width: 768px) {
        display: none;
      }
    }

    @media (min-width: 768px) {
      font-size: 1.0625rem;
    }
  }
`;

export const LogoStyle = styled.p`
  font-family: var(--logo-font);
`;

export const NavCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const NavUl = styled.ul<NavUlProps>`
  color: var(--white);
  position: fixed;
  background: rgb(60, 55, 55);
  background: radial-gradient(circle, rgba(232, 155, 25, 1) 10%, #000 96%);
  backdrop-filter: blur(150px);
  width: 90%;
  height: 100vh;
  top: 0;
  left: 0;
  display: grid;
  padding: 5rem 10% 200px;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  list-style: none;
  transform: translateX(${({ number }) => number});
  transition: 0.4s ease-in-out;
  backdrop-filter: blur(20px);
  z-index: 5;

  &::before {
    content: "";
    background: rgb(0, 0, 0, 0.7);
    width: 11vw;
    height: 100vh;
    position: absolute;
    right: -12%;
    backdrop-filter: blur(200px);

    @media (min-width: 768px) {
      display: none;
    }
  }
  @media (min-width: 768px) {
    position: relative;
    width: auto;
    height: max-content;
    background: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: auto;
    transform: translateX(0);
  }
`;

export const NavLinksStyle = styled.li`
  & > a {
    display: block;
    margin: 10px auto;
  }

  & a img {
    display: block;
    margin: 10px auto;
    filter: invert(90%) sepia(99%) saturate(2%) hue-rotate(82deg)
      brightness(108%) contrast(100%);

    @media (min-width: 768px) {
      display: none;
      margin: 0;
    }
  }
`;

export const CartButton = styled.div`
  & a {
    position: relative;
    text-align: center;
    margin-right: 10px;
  }
  & a img {
    filter: invert(90%) sepia(99%) saturate(2%) hue-rotate(82deg)
      brightness(108%) contrast(100%);
  }

  & a p {
   position: absolute;
   background: var(--red);
   padding: 0.2rem; 
   border-radius: 50%;
   top: -20px;
   right: -10px;
   font-size: 10px;
   display: flex;
  }
`;
