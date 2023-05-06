import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import linkData from "../../public/json/navlinks.json";
import {
  HeaderStyle,
  LogoStyle,
  NavCloseButton,
  NavUl,
  CartButton,
  NavLinksStyle,
} from "./navbar.styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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
        <a
          href="tel:+2348087943172"
          className="customer-care"
        >
          customer care line : +234 808 794 3172
        </a>
      </div>
      <nav className="main_nav">
        <button className="menu_btn" onClick={handleClick}>
          <Image
            src="/assets/menu.svg"
            alt=""
            className="menu_icon"
            width={20}
            height={20}
          />
        </button>

          <Link href={"/"}>
        <LogoStyle>
         Thrifts By Ronn
        </LogoStyle>
          </Link>
        <NavUl number={isOpen ? "0" : "-100%"}>
          <NavCloseButton className="close_btn" onClick={handleClick}>
            <Image
              src="/assets/x-lg.svg"
              alt=""
              className="close_icon"
              width={30}
              height={30}
            />
          </NavCloseButton>

          {linkData.map((data) => {
            return (
              <NavLinksStyle key={data.id}>
                <Link
                  href={data.link}
                  className="nav_links"
                  onClick={handleClose}
                >
                  <Image
                    src={data.icon}
                    alt={`${data.placeholder} icon`}
                    className="nav_link_icons"
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

        <Link href="/cart" className="cart_btn">
          <Image
            src="/assets/cart-icon.svg"
            alt="cart_icon"
            className="cart_icon"
            width={20}
            height={20}
          />
          <p className="cart_count">0</p>
        </Link>
        </CartButton>
      </nav>
    </HeaderStyle>
  );
};

export default Navbar;
