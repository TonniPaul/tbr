import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import linkData from "../../public/json/navlinks.json";
import {
  HeaderStyle,
  LogoStyle,
  NavCloseButton,
  NavUl,
  CartButton,
  NavLinksStyle,
  NavContainer,
} from "./navbar.styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);
  return (
    <HeaderStyle>
      <div>
        <Image
          src={"/assets/call_icon.svg"}
          alt="call_icon"
          width={20}
          height={20}
        />
        <a href="tel:+2348087943172">customer care line : +234 808 794 3172</a>
      </div>
      <NavContainer>
        <nav>
          <button onClick={handleClick}>
            <Image src="/assets/menu.svg" alt="" width={20} height={20} />
          </button>

          <Link href={"/"}>
            <LogoStyle>Thrifts By Ronn</LogoStyle>
          </Link>
          <NavUl number={isOpen ? "0" : "-115%"}>
            <NavCloseButton onClick={handleClick}>
              <Image src="/assets/x-lg.svg" alt="" width={30} height={30} />
            </NavCloseButton>

            {linkData.map((data) => {
              return (
                <NavLinksStyle key={data.id}>
                  <Link href={data.link} onClick={handleClose}>
                    <Image
                      src={data.icon}
                      alt={`${data.placeholder} icon`}
                      width={30}
                      height={30}
                    />
                    {data.placeholder}
                  </Link>
                </NavLinksStyle>
              );
            })}
          </NavUl>

          <CartButton>
            <Link href="/cart">
              <Image
                src="/assets/cart-icon.svg"
                alt="cart_icon"
                width={20}
                height={20}
              />
              <p>1</p>
            </Link>
          </CartButton>
        </nav>
      </NavContainer>
    </HeaderStyle>
  );
};

export default Navbar;
