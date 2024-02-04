import { HeaderWrapper, TitleText, StyledLink, TitleWrapper, AppTitle, ContentHeader } from "./HeaderStyles"
const Header = () => {
  return (
    <HeaderWrapper>
      <ContentHeader>
        <TitleWrapper>
          <TitleText>Brave Developers</TitleText>
          <AppTitle>Mobile terminal</AppTitle>
        </TitleWrapper>
        <StyledLink href={'/'}>Main</StyledLink>
      </ContentHeader>
    </HeaderWrapper>
  )
}

export default Header;