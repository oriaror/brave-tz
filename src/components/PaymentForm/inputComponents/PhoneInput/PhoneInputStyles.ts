"use client"
import { styled } from "styled-components";
import { InputMask } from "@react-input/mask";

const StyledInpuntMask = styled(InputMask)`
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
`
const InputWrapper = styled.div`
  position: relative;
`


export { StyledInpuntMask, InputWrapper }