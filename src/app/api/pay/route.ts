import { NextResponse } from "next/server";

export async function POST(request: Request) {
  return new Promise((res) => {
    setTimeout(res, 2000);
  }).then(() => {
    const value = getRandomInt(2)
    if (value === 1) {
      return NextResponse.json({ status: 'Success' }, {
        status: 200,
      })
    } return NextResponse.json({ status: 'Failed' }, { status: 503 })
  })
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

