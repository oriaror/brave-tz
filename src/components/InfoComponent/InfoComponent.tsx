'use client'

import { useEffect, useState } from "react"
import { Info, StyledInstruction, StyledInfo, StyledLoader, StyledResImg, StyledText, ResultWrapper } from "./InfoStyled";
import { useRouter } from "next/navigation";
import checked from "../../../public/img/checked.png"
import cancel from "../../../public/img/cancel.png"

console.log(checked);

const InfoComponent = ({ response, onClear, loading, setLoading }: any) => {
  const router = useRouter()

  useEffect(() => {
    if (response == null) {
      return
    }

    if (response) {
      setLoading()
      setTimeout(() => {
        router.back()
        onClear()
      }, 1500)
    } else {
      setTimeout(() => {
        setLoading()
        onClear()
      }, 1500)
    }
  }, [response])

  return (
    <Info >
      <StyledInstruction>Fill out the form and click the Pay button</StyledInstruction>
      <StyledInfo>After successful payment you will be redirected to the main page</StyledInfo>
      {loading ?
        <StyledLoader></StyledLoader> :
        response === true
          ? <ResultWrapper><StyledResImg src={checked.src} /> <StyledText>Payment received</StyledText></ResultWrapper> : null ||
            response === false ? <ResultWrapper><StyledResImg src={cancel.src} /><StyledText>Try again later</StyledText> </ResultWrapper> : null
      }
    </Info >
  )
}

export { InfoComponent };