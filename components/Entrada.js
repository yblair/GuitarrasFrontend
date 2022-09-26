import Link from 'next/link'
import Image from 'next/image'
import { formatearFecha } from '../helpers'
import styles from '../styles/entrada.module.css'

export default function Entrada({resultado}){
    const {id,url, titulo, imagen, published_at, resumen} = resultado
    return(
        <article>
            <Image priority='true' layout='responsive' width={800} height={600} src={imagen.url} alt={`imagen de ${titulo}`} />
            <div className={styles.contenido}>
            <h3 className={styles.titulo}>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.resumen}>{resumen}</p>
            <Link  href={`/blog/${url}`}>
                <a className={styles.enlace}>Leer mas</a>
            </Link>
            </div>
        </article>
    )
}