"use client"
import { styled } from "styled-components";
import Link from "next/link";

const HeaderWrapper = styled.header`
  background: rgb(0, 0, 0);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TitleText = styled.h1`
  font-family: "Reem Kufi", sans-serif;
  font-size: 24px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  margin: 0;
`
const AppTitle = styled.h2`
  font-family: "Reem Kufi", sans-serif;
  align-self: flex-end;
  font-size: 10px;
  color: rgb(255, 255, 255);
  margin: 0;
`

const StyledLink = styled(Link)`
  font-family: "Reem Kufi", sans-serif;
  font-size: 24px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  text-decoration: none;
  &:hover{
    transition: 250ms;
    transform: scale(1.2);;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export { HeaderWrapper, TitleText, StyledLink, TitleWrapper, AppTitle, ContentHeader };