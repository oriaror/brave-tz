import db from "../../../../public/db.json"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  return NextResponse.json(db)
}
