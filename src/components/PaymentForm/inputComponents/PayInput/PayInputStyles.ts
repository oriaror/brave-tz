'use client'

import { styled } from "styled-components"

const InputWrapper = styled.input`
  padding: 10px;
  width: 262px;
  height: 41px;
  color: rgb(112, 111, 111);
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0px;
  text-align: left;
  box-sizing: border-box;
  border-radius: 6px;
  background: rgb(255, 255, 255);
  &::-webkit-inner-spin-button{
  -webkit-appearance: none;
  margin: 0;
}
`
export { InputWrapper }