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
          <p>Shop smart, save more with Thrifts By Ronn.</p>

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
          </SocialLinksContainer>
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
          <div>
            <a href="#">Chat on WhatsApp</a>
            <a href="https://instagram.com/thriftsbyronn?igshid=NTc4MTIwNjQ2YQ==">
              Instagram
            </a>
            <a href="https://twitter.com/thriftsbyronn">Twitter</a>
          </div>
        </FooterSections>
      </div>
      <CopyRightSection>
        <Link href="/">© Thrifts by Ronn 2023</Link>
      </CopyRightSection>
    </FooterStyles>
  );
};

export default Footer;
