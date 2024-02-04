import { ContentWrapper } from "./ContentStyles"

type Props = { children: JSX.Element[] }

const Content = ({ children }: Props) => {
  return (<ContentWrapper>{children}</ContentWrapper>)
}

export default Content