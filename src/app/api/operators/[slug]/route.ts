import { NextResponse } from "next/server"
import db from "../../../../../public/db.json"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params
  const index = db.findIndex((value: any) => {
    return value.slug === slug
  })

  if (index === -1) {
    return NextResponse.json({ Error: 'Error' }, { status: 404 })
  }
  return NextResponse.json({ Operator: db[index] }, { status: 200 })
}