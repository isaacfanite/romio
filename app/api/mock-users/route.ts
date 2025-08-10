import { NextResponse } from 'next/server'

export async function GET() {
  const users = [
    { id: '1', name: 'Hannah', age: 28 },
    { id: '2', name: 'Marcus', age: 32 }
  ]
  return NextResponse.json(users)
}
