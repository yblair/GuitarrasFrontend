import Link from "next/link"
import Image from "next/image"
import styles from "../styles/guitarra.module.css"


export default function Guitarra({guitarra}) {
    const {descripcion, imagen, nombre, precio, url} = guitarra

    return (
    <div className={styles.guitarra}>
        <Image layout="responsive" width={200} height={350} src={imagen[0].url} alt={`imagen guitarra ${nombre}`} />
    <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}>
            <a className={styles.enlace}>
        Ver producto
            </a>
        </Link>
    </div>
    </div>
  )
}
