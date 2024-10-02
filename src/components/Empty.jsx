import styles from './Empty.module.css'
import Clipboard from '../assets/Clipboard.png'

export function Empty(){
    return(
        <div className={styles.main}>
            <img src={Clipboard}/>
            <span style={{fontWeight: 'bold'}}>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus items a fazer</span>
        </div>
    )
}