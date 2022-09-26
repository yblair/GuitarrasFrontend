import Link from "next/link"
import styles from "../styles/inexistente.module.css"


export default function Inexistente(){
    return(
        
            <div className={styles.inexistente}>
            <h1 className="heading">No se encontraron resultados</h1>
            <Link href='/'> Volver al inicio </Link>
            </div>
        
    )
}