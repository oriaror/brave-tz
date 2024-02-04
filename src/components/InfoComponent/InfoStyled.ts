"use client"

import { styled } from "styled-components"


const Info = styled.div`
  border-radius: 0px 8px 8px 0px; 
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background: linear-gradient(225.00deg, rgb(238, 0, 148) 0%,rgb(178, 224, 0) 100%);
  height: 450px;
  width: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 900px){
    width: 350px;
  }
`
const StyledInstruction = styled.p`
  font-family: "Reem Kufi", sans-serif;
  font-size: 20px;
  font-weight: 400;

  color: rgb(255, 255, 255);
  @media (max-width: 900px){
    margin: 10%;
  }
`
const StyledInfo = styled.p`
  font-family: "Reem Kufi", sans-serif;

  font-size: 14px;
  font-weight: 400;
  color: rgb(255, 255, 255);
  @media (max-width: 900px){
    margin: 0 10%;
  }
`
const StyledLoader = styled.div`
  margin: auto 0;
  width: 150px;
  height: 150px;
  border: 2px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
&::after,
&::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  background: #FF3D00;
  width: 6px;
  height: 6px;
  transform: translate(150%, 150%);
  border-radius: 50%;
}
&::before {
  left: auto;
  top: auto;
  right: 0;
  bottom: 0;
  transform: translate(-150%, -150%);
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} `

const StyledText = styled.p`
   font-family: "Reem Kufi", sans-serif;
   color: rgb(255, 255, 255);
   font-size: 24px;
 `

const StyledBalance = styled.p`
  align-self: flex-end;
  margin: 10px;
`

const StyledResImg = styled.img`
  width: 150px;
  height: 150px;
`
const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto 0;
`

export { Info, StyledInstruction, StyledInfo, StyledLoader, StyledResImg, StyledBalance, StyledText, ResultWrapper }