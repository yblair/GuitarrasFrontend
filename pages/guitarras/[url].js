import Image from "next/image"
import Layout from "../../components/Layout"
import styles from "../../styles/guitarra.module.css"

export default function GuitarraProducto({respuesta}){
    const {descripcion, imagen, nombre, precio } = respuesta[0]

    return(
        <Layout>
            <div className={styles.guitarra}>
                 <Image layout="responsive" width={200} height={350} src={imagen[0].url} alt={`imagen guitarra ${nombre}`} /> 
             <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcionGuitarra}>{descripcion}</p>
                <p className={styles.precio}>$ {precio}</p>
             </div>
            </div>
    </Layout>
    )
}

export async function getServerSideProps({query: {url}}){
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const peticion = await fetch(urlGuitarra)
    const respuesta = await peticion.json()

    return{
        props:{
            respuesta
        }
    }
}