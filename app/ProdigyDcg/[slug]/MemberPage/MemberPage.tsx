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
                <p className={styles.memberPage__background} >{memberData[0].nickname}</p>

                <fieldset className={styles.memberPage__info} style={{background: 'rgba(52, 235, 183, 0.5)'}} >
                    <legend> {memberData[0].nickname} </legend>
                    <div className={styles.memberPage__info__img}  >
                        <img src={memberData[0].thumbnail} alt={memberData[0].thumbnail} />
                    </div>
                    <div className={styles.memberPage__info__description} >
                        <h3> {birthday.toDateString()} </h3>
                        <a href={memberData[0].telegram}>{memberData[0].telegram}</a>
                        <p>{memberData[0].description}</p>
                    </div>
                </fieldset>
            </section>
        </>
    )
}

export default MemberPage

