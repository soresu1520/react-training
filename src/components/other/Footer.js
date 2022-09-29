import styled from "styled-components";

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
        <Image src="/assets/socialmedia/twitter-fill.png" alt="twitter" />
        <Image src="/assets/socialmedia/instagram-line.png" alt="instagram" />
        <Image src="/assets/socialmedia/facebook-fill.png" alt="facebook" />
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
  flex-flow: row wrap;
  justify-content: center;
`;

const Image = styled.img`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const FooterCopyright = styled.h5`
  font-size: var(--font-size-h5);
  color: var(--color-greyscale-200);
  font-weight: var(--font-weight-heading-light);
  margin-top: 1em;
`;

const FooterText = styled.h5`
  font-size: var(--font-size-h5);
  color: var(--color-greyscale-600);
  font-weight: var(--font-weight-heading-light);
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 1em;
`;
