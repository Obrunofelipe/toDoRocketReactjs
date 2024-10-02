import styles from './Header.module.css'
import Logo from '../assets/rocket.svg'
export function Header(){
    return(
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="" />
                <span>to</span>
                <span>do</span>
            </div>
        </div>
    )  
}