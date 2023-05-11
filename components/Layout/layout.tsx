import { ReactNode, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Loader from "../Loader/Loader";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);

  return (
    <>
      {/* {isLoading && <Loader />} */}

      <Navbar />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Layout;
