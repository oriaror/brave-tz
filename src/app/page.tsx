import Operator from "@/components/OperatorCard.tsx/Operator"
import Content from "@/components/ContentComponent/Content"
import { Paragr } from "@/components/ContentComponent/ContentStyles"

interface IData {
  id: number,
  name: string,
  img: string,
  slug: string
}


async function getData() {
  const res = await fetch(process.env.DB_HOST + '/api/operators', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Error')
  }
  return res.json()
}

export default async function Home() {
  const data: IData[] = await getData()

  return (
    <>
      <Paragr>Выберите оператора</Paragr>
      <Content>
        {data.map((item) =>
          <Operator
            id={item.id}
            name={item.name}
            img={item.img}
            slug={item.slug} />)}
      </Content>
    </>
  )
}
