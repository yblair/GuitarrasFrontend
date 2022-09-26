import Layout from '../components/Layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
    return(
     
       <Layout
       pagina="Nosotros">
       <main >
        <h2 className='heading'>¡Hola!</h2>  
        <div className={styles.contenido}>
            <p> Mi nombre es Yamila y soy desarrolladora full stack. Desarrolle este proyecto inspirado en GuitarLA, sitio de venta de guitarras de Los Angeles.</p>
        </div>
       </main>
        </Layout>
       
    )
}