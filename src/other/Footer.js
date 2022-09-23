import styled from "styled-components";
import facebook from "./assets/facebook-fill.png";
import twitter from "./assets/twitter-fill.png";
import instagram from "./assets/instagram-line.png";

const Footer = () => {
  return (
    <FooterDiv>
      <ElementDiv>
        <FooterText>Terms of Service</FooterText>
        <FooterText>Security</FooterText>
        <FooterText>Privacy</FooterText>
        <FooterText>Contact</FooterText>
        <FooterText>About us</FooterText>
      </ElementDiv>

      <ElementDiv>
        <Image src={twitter} alt="twitter" />
        <Image src={instagram} alt="instagram" />
        <Image src={facebook} alt="facebook" />
      </ElementDiv>

      <FooterCopyright>
        {"@ "}
        {new Date().getFullYear()} Click and Eat
      </FooterCopyright>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const ElementDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: center;
`;

const Image = styled.img`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const FooterCopyright = styled.h5`
  font-size: 0.85rem;
  color: var(--color-greyscale-200);
  font-weight: 400;
  margin-top: 1em;
`;

const FooterText = styled.h5`
  font-size: 0.85rem;
  color: var(--color-greyscale-600);
  font-weight: 400;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 1em;
`;
