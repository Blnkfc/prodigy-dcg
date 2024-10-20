'use client'
import { useEffect, useState } from "react";
import { Member } from "../interfaceLIst";
import Slider from "../StaticComps/Slider/Slider";
import styles from "./ProdigyDcg.module.css"

interface ProdigyDcgProps {
    members: Member[];
}



const ProdigyDcg = ({ members }: ProdigyDcgProps) => {
    const [thumbnailList, setThumbnailList] = useState<string[]>([])

    useEffect(() => {
        const newThumbnailList: string[] = []

        members.forEach((m) => {
            newThumbnailList.push(m.thumbnail)
        })
        console.log(newThumbnailList)
        setThumbnailList(newThumbnailList)
    }, members)



    console.log(members)

    return (
        <div className={styles.profile} >
            <section className={styles.profile__info} >
                <img className={styles.profile__info__img} src="https://i.imgur.com/yLYjhOM.jpeg" alt="https://i.imgur.com/yLYjhOM.jpeg" />
                <div className={styles.profile__info__description}  >
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni, eligendi sequi corrupti facere ad optio
                        fuga dolores. Ipsa non assumenda nam quos minima sunt, itaque voluptatibus adipisci similique dignissimos voluptate
                        deleniti dolorem animi ipsum. Laborum minus eius ad, harum nobis sint in. Quo, veniam dignissimos a quis atque
                        dolorem! Commodi provident, laborum dolore ratione unde ipsa placeat, temporibus quasi illo quos dignissimos vel
                        vitae non ullam natus eveniet voluptates repellendus eaque. Nam tempora voluptatem aut! Sequi eligendi facere omnis
                        et libero doloribus, aspernatur earum sapiente ipsam deserunt id? Debitis totam iure ex perspiciatis commodi,
                        tempore fugiat ipsa magnam quo.
                    </span>
                    <a href="#prodigy-cast" >
                        CHECK CAST
                    </a>
                </div>
            </section>
            <section className={styles.profile__cast} >
                <Slider imgLinks={thumbnailList} />
            </section>
        </div>
    )
}


export default ProdigyDcg;