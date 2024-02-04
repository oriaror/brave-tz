'use client'

import { styled } from "styled-components"



const ErrorP = styled.p`
  font-family: "Reem Kufi", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #ff0000;
`

const SucP = styled.p`
  font-family: "Reem Kufi", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #008000;
`
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`

const StyledEnterValue = styled.p`
  font-family: "Reem Kufi", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
`
const FakeP = styled.p`
  opacity: calc(0);
  font-family: "Reem Kufi", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
`

export { ErrorP, SucP, StyledLabel, StyledEnterValue, FakeP }