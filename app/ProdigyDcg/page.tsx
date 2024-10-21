'use client'
import { useEffect, useState } from "react";
import { Member, Slide } from "../interfaceLIst";
import Slider from "../StaticComps/Slider/Slider";
import styles from "./ProdigyDcg.module.css"

interface ProdigyDcgProps {
    members: Member[];
}



const ProdigyDcg = ({ members }: ProdigyDcgProps) => {
    const [slideList, setSlideList] = useState<Slide[]>([])

    useEffect(() => {
        const newSlideList: Slide[] = []
        console.log('stuffffffffffffff')
        members.forEach((m) => {
            newSlideList.push({ nickName: m.nickname, thumbnail: m.thumbnail })
        })
        console.log(newSlideList)
        setSlideList(newSlideList)
    }, members)



    //console.log(slideList)

    return (
        <div className={styles.profile} >
            <section className={styles.profile__info} >
                <div className={styles.profile__info__img}>
                    <img  src="https://i.imgur.com/yLYjhOM.jpeg" alt="https://i.imgur.com/yLYjhOM.jpeg" />
                    <p>Шо по разбору?</p>
                </div>
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
                    <div className={styles.profile__info__description__buttons} >
                        <a href="#prodigy-cast" className={styles.profile__info__description__buttons__cast} >
                            CHECK CAST
                            <span className={styles.button__arrow} > ➘ </span>
                        </a>

                        <a href="" className={styles.profile__info__description__buttons__covers} >
                            CHECK COVERS
                            <span className={styles.button__arrow} > ➘ </span>
                        </a>
                    </div>
                </div>
            </section>
            <section className={styles.profile__cast} >
                <Slider slideList={slideList} />
            </section>
        </div>
    )
}


export default ProdigyDcg;