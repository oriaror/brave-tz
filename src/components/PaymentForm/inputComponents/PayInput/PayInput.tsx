"use client"

import { InputWrapper } from "./PayInputStyles"
import { ErrorP, SucP, StyledLabel, StyledEnterValue, FakeP } from "../ErrorStyles"

interface IPayInput {
  pay: string,
  handleOnChangePay: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const PayInput = ({ pay, handleOnChangePay }: IPayInput) => {

  return (
    <StyledLabel>
      <StyledEnterValue>Enter pay amount</StyledEnterValue>
      <InputWrapper
        placeholder="10-1000"
        value={pay}
        onChange={handleOnChangePay}
        type="number"
      />
      {pay ? Number(pay) < 10 || Number(pay) > 1000 || String(pay)[0] === '0' ?
        <ErrorP>Incorrect pay amount (10-1000)</ErrorP> :
        <SucP>Correct payment amount</SucP> : <FakeP>....</FakeP>}
    </StyledLabel>
  )
}

export { PayInput }