'use client'
import styles from "./MemberPage.module.css"

import { Member } from "@/app/interfaceLIst"

interface MemberPageProps {
    memberData: Member[]
}


const MemberPage = ({ memberData }: MemberPageProps) => {
    const birthday = new Date(memberData[0].birthday)
    console.log('DATA IN MEMBER PAGE:')
    console.log(memberData)

    return (
        <>
            <section className={styles.memberPage} >
                <img src={memberData[0].thumbnail} alt={memberData[0].thumbnail} />
                <div className={styles.memberPage__info} >
                    <h1> {memberData[0].nickname} </h1>
                    <h3> {birthday.toDateString()} </h3>
                    <a href={memberData[0].telegram}>{memberData[0].telegram}</a>
                    <p>{memberData[0].description}</p>
                </div>
            </section>
        </>
    )
}

export default MemberPage