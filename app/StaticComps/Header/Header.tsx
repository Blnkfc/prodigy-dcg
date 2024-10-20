import styles from "./header.module.css"

const Header = () => {
    return(
        <div className={styles.header} >
            <img style={{width: "300px", height: "100px"}}  src="https://i.imgur.com/6fMAYWG.png" alt="" />
        </div>
    )
}

export default Header