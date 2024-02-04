import PaymentForm from "@/components/PaymentForm/PaymentForm"
import { redirect } from "next/navigation"

async function getOperator(slug: string) {
  const response = await fetch(process.env.DB_HOST + `/api/operators/${slug}`, { cache: 'no-store' })
  if (!response.ok) {
    return redirect('/')
  }
  return response.ok
}


export default async function PaymentScreen({ params }: { params: { slug: string } }) {
  const operator = await getOperator(params.slug)
  return (
    <PaymentForm name={params.slug} />
  )
}