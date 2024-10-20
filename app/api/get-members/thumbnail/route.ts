import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';


export async function GET() {
  noStore()
  const members = await sql`SELECT thumbnail FROM member;`;
  return NextResponse.json({ members: members.rows }, { status: 200 });
}