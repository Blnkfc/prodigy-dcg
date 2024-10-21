'use client'

import { useState } from "react"
import styles from "./Slider.module.css"
import { Slide } from "@/app/interfaceLIst"
import Link from "next/link"

interface SliderProps{
    slideList: Slide[]
}

const Slider = (props: SliderProps) => {
    const centralSlide = 2
    const [animationClass, setAnimationClass] = useState('')
    console.log(props.slideList)
    
   
    
    const slides = props.slideList.map((s: Slide, index: number) =>
    {
        const classString = [styles.slide,
            (centralSlide == index)?styles.slide__central
            :((centralSlide == index+1) || (centralSlide == index-1))?styles.slide__inner
            :((centralSlide >= index+2) || (centralSlide <= index-2))?styles.slide__outer:"", animationClass].join(" ")
        return <div key={s.nickName}
        className={classString
        }>
            <Link href={`/ProdigyDcg/${s.nickName}`} >
            <img src={s.thumbnail} alt="" />
            </Link>
        </div>}
        
    )

    const shiftRight = (array: Slide[]) => {
        console.log(`start: ${array}`)
        const lastElemIndex = array.length - 1
        const lastElem = array[lastElemIndex]
        array.splice(lastElemIndex, lastElemIndex)
        array.unshift(lastElem)
        console.log(`end: ${array}`)
    }
    const shiftLeft = (array: Slide[]) => {
        console.log(`start: ${array}`)
        const firstElem = array.shift()
        if(firstElem !== undefined)
            array.push(firstElem)
        console.log(`end: ${array}`) 
    }


    const handleLeft = () => {
        setAnimationClass(styles.slide__left)
        setTimeout(() => {setAnimationClass('')}, 250)
        shiftRight(props.slideList)
    }

    const handleRight = () => {
        setAnimationClass(styles.slide__right)
        shiftLeft(props.slideList)
        setTimeout(() => {setAnimationClass('')}, 250)
        
    }


    return (
        <div className={styles.slider} id="prodigy-cast" >
            <button className={styles.slider__left} onClick={handleLeft}  >{`❬`}</button>
            {slides}
            <button className={styles.slider__right} onClick={handleRight} >{`❭`}</button>
        </div>
    )
}

export default Slider