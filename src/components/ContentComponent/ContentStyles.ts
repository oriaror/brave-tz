'use client'
import { styled } from "styled-components"

const ContentWrapper = styled.ul`
  list-style: none;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
  gap: 24px;
  margin: auto;
  @media (max-width: 1028px){
    display: grid;
      grid-template-columns: minmax(0, 1fr);
  }
`
const Paragr = styled.h2`
  align-self: center;
  font-family: "Reem Kufi", sans-serif;
  color: rgb(0, 0, 0);
  font-size: 36px;
  font-weight: 400;
  line-height: 44px;
  letter-spacing: 0px;
  text-align: left;
`
export { ContentWrapper, Paragr }