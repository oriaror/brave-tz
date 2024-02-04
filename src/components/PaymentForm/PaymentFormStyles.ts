'use client'

import { styled } from "styled-components"

const FormWrapper = styled.form`
  border-radius: 8px 0 0 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background-color: rgb(249, 249, 249);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 450px;
  gap: 2rem;
`

const ButtonPay = styled.button`
  border-radius: 6px;
  color: #000000;
  height: 42px;
  width: 200px;
  cursor: pointer;
  &:enabled:hover {
  background: rgb(0, 0, 0);
  color: white;
  transition-duration: 0.4s;
}
`

const StyledName = styled.p`
  text-transform: capitalize;
  font-family: "Reem Kufi", sans-serif;
  font-size: 24px;
`

const InputWrapperCom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Info = styled.div`
  border-radius: 0px 8px 8px 0px; 
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background: linear-gradient(225.00deg, rgb(238, 0, 148) 0%,rgb(178, 224, 0) 100%);
  height: 450px;
  width: 600px;
  @media (max-width: 900px){
    width: 350px;
  }
`
const ContentFormWrapper = styled.div`
  display: flex;
  align-self: stretch;
  margin: auto 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  /* margin: 10%; */
  @media (max-width: 900px){
    flex-direction: column;
  }
`

export { FormWrapper, ButtonPay, StyledName, InputWrapperCom, Info, ContentFormWrapper };