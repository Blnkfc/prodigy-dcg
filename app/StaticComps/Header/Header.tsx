import Link from "next/link"
import styles from "./header.module.css"

const Header = () => {
    return(
        <div className={styles.header} >
            <img style={{width: "300px", height: "100px"}}  src="https://i.imgur.com/6fMAYWG.png" alt="" />
            <Link href={"/"} ></Link>
        </div>
    )
}

export default Header