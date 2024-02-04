'use client'

import { FormWrapper, ButtonPay, StyledName, InputWrapperCom, Info, ContentFormWrapper } from "./PaymentFormStyles";
import { PhoneInput } from "./inputComponents/PhoneInput/PhoneInput";
import { PayInput } from "./inputComponents/PayInput/PayInput";
import { useEffect, useState } from "react";
import { InfoComponent } from "../InfoComponent/InfoComponent";

interface IPaymentForm {
  name: string,
}

enum StatusResponce {
  SUCCESS = 'Success',
  FAILED = 'Failed'
}

type TFormData = {
  phone: string,
  pay: string
}

const makeInit = (): TFormData => {
  return {
    phone: '',
    pay: '',
  }
}

const PaymentForm = ({ name }: IPaymentForm) => {
  const [formData, setFormData] = useState<TFormData>(makeInit())
  const [formValid, setFormValid] = useState(false);
  const [response, setResponse] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(false)


  const handleOnChangeForm = (name: keyof TFormData) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const newData = {
        ...formData
      }

      newData[name] = e.target.value
      setFormData(newData)
    }
  }

  const res = async () => {
    setResponse(null)
    const resp = await fetch(process.env.DB_HOST + "/api/pay", {
      method: "POST",
      body: JSON.stringify(formData),
      cache: 'no-store'
    })
    const result = await resp.json()
    if (result.status === StatusResponce.SUCCESS) {
      setResponse(true)
    } else {
      setResponse(false)
    }
  }

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    res()
  }


  useEffect(() => {
    if (formData.phone.length === 17 && Number(formData.pay) >= 10 && Number(formData.pay) <= 1000 && String(formData.pay)[0] !== '0') {
      setFormValid(true)
    } else setFormValid(false)
  }, [formData])

  const clearForm = () => {
    setFormData(makeInit())
  }

  return <ContentFormWrapper>
    <FormWrapper>
      <StyledName>{name}</StyledName>
      <InputWrapperCom>
        <PhoneInput
          phone={formData.phone}
          handleOnChangePhone={handleOnChangeForm('phone')} />
        <PayInput
          pay={formData.pay}
          handleOnChangePay={handleOnChangeForm('pay')} />
        <ButtonPay
          disabled={!formValid}
          onClick={onClick}>Pay</ButtonPay>
      </InputWrapperCom>
    </FormWrapper >
    <InfoComponent
      pay={formData.pay}
      response={response}
      onClear={clearForm}
      loading={loading}
      setLoading={() => setLoading(false)}
    />
  </ContentFormWrapper>
}

export default PaymentForm;