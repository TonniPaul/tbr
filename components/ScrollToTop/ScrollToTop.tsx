import { useState, useEffect } from "react";
import Image from "next/image";
import { ScrollToTopContainer } from "./scrollToTop.styles";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 200) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollToTopContainer>
      {visible && (
        <Image
          src="/assets/next.png"
          alt="scroll-to-top icon"
          width={30}
          height={30}
          onClick={scrollToTop}
        />
      )}
    </ScrollToTopContainer>
  );
};

export default ScrollToTop;
