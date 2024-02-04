import { FC } from "react";
import { OperatorWraper, OperatorImg, DescriptionWrapper, OperatorTitle, FakeBtn } from "./OperatorStyles";
import Link from "next/link";

interface IOperator {
  id: number,
  name: string,
  img: string,
  slug: string
}

const Operator: FC<IOperator> = ({ id, name, img, slug }) => {
  return (
    <OperatorWraper key={id}>
        <Link href={`/payment/${slug}`} datatype={name}><OperatorImg src={img} alt="#" /></Link>
        <DescriptionWrapper>
          <OperatorTitle>{name}</OperatorTitle>
          <FakeBtn>Pay</FakeBtn>
        </DescriptionWrapper>
    </OperatorWraper>
  )
}

export default Operator;


