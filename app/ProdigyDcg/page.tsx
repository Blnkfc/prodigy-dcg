'use client'
import { Member } from "../interfaceLIst";




const ProdigyDcg = (props: {members:{members:Member[]}}) => {
    console.log(props.members.members)
    
    const members = props.members.members.map((m) => {return <div> {m.nickname} </div>})
    return (
        <div>
            {members}
        </div>
    )
}


export default ProdigyDcg;