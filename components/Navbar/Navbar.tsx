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
import { useRouter } from "next/router";
import { useStore } from "@/store";
import { CartProps } from "@/store/cartSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<CartProps[]>([]);
  const { cart } = useStore();

  useEffect(() => {
    setCartCount(cart);
  });

  const router = useRouter();

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

  const handleCartRoute = () => {
    router.push("/cart");
  };
  return (
    <HeaderStyle>
      <div>
        <a href="tel:+2348087943172">
          <Image
            src={"/assets/telephone-call.png"}
            alt="call_icon"
            width={20}
            height={20}
          />
          customer care line : +234 808 794 3172
        </a>
      </div>
      <NavContainer>
        <nav>
          <button onClick={handleClick} aria-label="nav-menu">
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
                <NavLinksStyle
                  isActive={router.pathname === data.link}
                  key={data.id}
                >
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

          <CartButton onClick={handleCartRoute}>
            {/* <Link href="/cart"> */}
            <Image
              src="/assets/cart-icon.svg"
              alt="cart_icon"
              width={20}
              height={20}
            />
            <p>{cartCount.length} </p>
            {/* </Link> */}
          </CartButton>
        </nav>
      </NavContainer>
    </HeaderStyle>
  );
};

export default Navbar;
