'use client'

import { Member } from "@/app/interfaceLIst"

interface MemberPageProps{
    memberData: Member
}


const MemberPage = ({memberData}:MemberPageProps) => {
    return(
        <>
        <div>
            {memberData.nickname}
        </div>
        <div>
            {memberData.description}
        </div>
        </>
    )
}

export default MemberPage