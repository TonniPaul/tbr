import Image from "next/image";
import {
  CopyRightSection,
  FooterSections,
  FooterStyles,
  SocialLinksContainer,
  TBRDataSection,
} from "./footer.styles";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterStyles>
      <div>
        <TBRDataSection>
          <Image src="/assets/logo.png" alt="tbr-logo" width={70} height={70} />
          <p>With us, you can afford everything.</p>
        </TBRDataSection>
        <FooterSections>
          <p>Shop by category</p>
          <div>
            <a href="#">Bag</a>
            <a href="#">Shoes</a>
            <a href="#">Gown</a>
            <a href="#">Shirts</a>
          </div>
        </FooterSections>
        <FooterSections>
          <p>Information</p>
          <div>
            <Link href="/about">About</Link>
            <Link href="/contact">Return Policy</Link>
          </div>
        </FooterSections>
        <FooterSections>
          <p>Contact Us</p>
          <SocialLinksContainer>
            <a href="https://twitter.com/thriftsbyronn">
              <div>
                <Image
                  src="/assets/twitter-sign.png"
                  alt="twitter-logo"
                  width={20}
                  height={20}
                />
              </div>
            </a>
            <a href="https://instagram.com/thriftsbyronn?igshid=NTc4MTIwNjQ2YQ==">
              <Image
                src="/assets/instagram.png"
                alt="twitter-logo"
                width={20}
                height={20}
              />
            </a>
            <a href="https://wa.link/uvusr4">
              <Image
                src="/assets/whatsapp1.png"
                alt="twitter-logo"
                width={20}
                height={20}
              />
            </a>
          </SocialLinksContainer>
        </FooterSections>
      </div>
      <CopyRightSection>
        <Link href="/">© Thrifts by Ronn 2023</Link>
      </CopyRightSection>
    </FooterStyles>
  );
};

export default Footer;
