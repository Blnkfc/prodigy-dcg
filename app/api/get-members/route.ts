import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';
import { error } from 'console';


export async function GET(request: Request) {
  noStore()
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const nickName = searchParams.get('nickName')

  if(id){
    const member = await sql`SELECT * FROM member WHERE id=${id}`
    return NextResponse.json({member: member.rows}, {status: 200})
  }else if(nickName){
    const member = await sql`SELECT * FROM member WHERE nickName=${nickName}`
    if(JSON.stringify(member.rows) === '[]'){
      return NextResponse.json({error: "Could not find requested member."}, {status: 404})
    }
    return NextResponse.json({member: member.rows}, {status: 200})
  }


  const members = await sql`SELECT * FROM member;`;
  return NextResponse.json({ members: members.rows }, { status: 200 });
}