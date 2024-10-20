'use client'
import { Member } from "../interfaceLIst";

interface ProdigyDcgProps {
    members: Member[];
}
  


const ProdigyDcg = ({members} : ProdigyDcgProps) => {
    console.log(members)
    
    const membersList = members?.map((m) => {return <div key={m.nickname} > {m.nickname} </div>})
    return (
        <div>
            {membersList}
        </div>
    )
}


export default ProdigyDcg;