import Guitarra from "./Guitarra";
import styles from "../styles/listado.module.css"


export default function Listado({guitarras}){
    return(
        <div className={styles.listado}>
           {guitarras.map(g => (
            <Guitarra
            key={g.id}
            guitarra={g}
            />
           ))}
        </div>
    )
}