import Image from "next/image"
import Layout from "../../components/Layout"
import {formatearFecha} from '../../helpers'
import styles from '../../styles/entrada.module.css'

export default function EntradaBlog({pagina}){
   
    const { titulo, imagen, published_at, contenido} = pagina
   
    return(
        <Layout pagina={titulo}>
        <main className="contenedor">
            <h1 className="heading"> {titulo} </h1>
            <article className={styles.entrada} >
                 <Image layout="responsive" width={800} height={600} src={imagen.url} alt={`imagen ${titulo}`} /> 
           <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
           </div>
            </article>
        </main>
        </Layout>
    )
}

export async function getStaticPaths(){
    const Url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(Url)
    const pagina = await respuesta.json()
    const paths = pagina.map(p => ({
        params: {url: p.url}
    }))


    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {url}}){

    const Url = `${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await fetch(Url)
    const pagina = await respuesta.json()


    return{
        props:{
            pagina: pagina[0]
        }
    }
}