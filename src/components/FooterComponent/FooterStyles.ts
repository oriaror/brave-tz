"use client"
import { styled } from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: grey;
  height: 111px;
  padding-left: 20px;
  background: rgb(0, 0, 0);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const ContentFooter = styled.div`
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `

const CopyStyles = styled.h2`
  font-family: "Reem Kufi", sans-serif;
  font-size: 24px;
  color: rgb(255, 255, 255);
`

const TitleText = styled.h2`
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
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export { FooterWrapper, CopyStyles, ContentFooter, TitleText, AppTitle, TitleWrapper };