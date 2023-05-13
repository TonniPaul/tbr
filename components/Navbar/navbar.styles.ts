import styled from "styled-components";
import Link from "next/link";

interface NavUlProps  {
  number: string;
}

export const HeaderStyle = styled.header`
  overflow: hidden;

  & > div:first-child {
    display: flex;
    gap: 10px;
    background: var(--yellow);
    color: var(--black);
    padding: 0.7rem 1rem;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
`;

export const NavContainer = styled.div`
  background: var(--black);

  & nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--white);
    padding: 0.5rem 1rem;
    position: relative;
    max-width: 1440px;
    margin: auto;

    & button img {
      filter: var(--white-filter);

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
    background: rgba(0, 0, 0, 0.75);
    width: 11vw;
    height: 100vh;
    position: absolute;
    right: -12%;

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

export const NavLinksStyle = styled.li<{ isActive: boolean }>`
  transition: var(--short-transition);
  border-bottom: ${({ isActive }) =>
    isActive ? "2px solid var(--yellow)" : "2px solid (--black)"};
  color: ${({ isActive }) => (isActive ? "var(--yellow)" : "(--white)")};

  @media (max-width: 768px) {
    border: none;

    display: flex;
    flex-wrap: wrap;
    scale: ${({ isActive }) => (isActive ? 1.3 : 1)};
  }

  & > a {
    display: block;
    margin: 10px auto;
  }

  & a img {
    display: block;
    margin: 10px auto;
    filter: ${({ isActive }) =>
      isActive ? "var(--yellow-filter)" : "var(--white-filter)"};

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
    filter: var(--white-filter);
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
