'use client'

import { useState } from "react"
import styles from "./Slider.module.css"



const Slider = (props: { imgLinks: string[] }) => {
    const centralSlide = 2
    const [animationClass, setAnimationClass] = useState('')
    
    console.log(centralSlide)
    
    const slideList = props.imgLinks.map((s, index) =>
    {
        const classString = [styles.slide,
            (centralSlide == index)?styles.slide__central
            :((centralSlide == index+1) || (centralSlide == index-1))?styles.slide__inner
            :((centralSlide >= index+2) || (centralSlide <= index-2))?styles.slide__outer:"", animationClass].join(" ")
        return <div key={s}
        className={classString
        }>
            <img src={s} alt="" />
        </div>}
        
    )

    const shiftRight = (array: string[]) => {
        console.log(`start: ${array}`)
        const lastElemIndex = array.length - 1
        const lastElem = array[lastElemIndex]
        array.splice(lastElemIndex, lastElemIndex)
        array.unshift(lastElem)
        console.log(`end: ${array}`)
    }
    const shiftLeft = (array: string[]) => {
        console.log(`start: ${array}`)
        const firstElem = array.shift()
        if(firstElem !== undefined)
            array.push(firstElem)
        console.log(`end: ${array}`) 
    }


    const handleLeft = () => {
        setAnimationClass(styles.slide__left)
        setTimeout(() => {setAnimationClass('')}, 250)
        shiftRight(props.imgLinks)
    }

    const handleRight = () => {
        setAnimationClass(styles.slide__right)
        shiftLeft(props.imgLinks)
        setTimeout(() => {setAnimationClass('')}, 250)
        
    }


    return (
        <div className={styles.slider}  >
            <button className={styles.slider__left} onClick={handleLeft}  >{`❬`}</button>
            {slideList}
            <button className={styles.slider__right} onClick={handleRight} >{`❭`}</button>
        </div>
    )
}

export default Slider