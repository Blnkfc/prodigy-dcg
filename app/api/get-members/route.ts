import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';


export async function GET(request: Request) {
  noStore()
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const nickName = searchParams.get('nickName')

  if (id) {
    const member = await sql`SELECT * FROM member WHERE id=${id}`
    return NextResponse.json({ member: member.rows }, { status: 200 })
  } else if (nickName) {
    const member = await sql`SELECT member.nickname, member.birthday, member.telegram, member.description, member.thumbnail, profile_style.bgcolor, profile_style.bordercolor, profile_style.textcolor 
                            FROM member 
                            INNER JOIN profile_style ON member.id=profile_style.memberid 
                            WHERE nickName=${nickName}`
    if (JSON.stringify(member.rows) === '[]') {
      return NextResponse.json({ error: "Could not find requested member." }, { status: 404 })
    }
    return NextResponse.json({ member: member.rows }, { status: 200 })
  }

  //SELECT member.nickname, member.birthday, member.telegram, member.description, member.thumbnail, profile_style.bgcolor, profile_style.bordercolor, profile_style.textcolor 
  //FROM member 
  //INNER JOIN profile_style ON member.id=profile_style.memberid
  const members = await sql`SELECT * FROM member;`;
  return NextResponse.json({ members: members.rows }, { status: 200 });
}