import { FooterWrapper, TitleText, ContentFooter, AppTitle, TitleWrapper } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentFooter>
        <TitleWrapper>
          <TitleText>Brave Developers</TitleText>
          <AppTitle>Mobile terminal</AppTitle>
        </TitleWrapper>
      </ContentFooter>
    </FooterWrapper >
  )
}

export default Footer;