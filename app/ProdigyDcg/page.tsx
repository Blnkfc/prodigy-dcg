'use client'
import { Member } from "../interfaceLIst";
import Members from "./Members/page";
import Covers from "./Covers/page";
import Gacha from "./Gacha/page";



const ProdigyDcg = (props: {members:Member[]}) => {
    console.log(props.members)
    return (
        <div>
            <Members />
            <Covers />
            <Gacha />
        </div>
    )
}


export default ProdigyDcg;