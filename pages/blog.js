import Layout from '../components/Layout'
import Entrada from '../components/Entrada'
import styles from '../styles/blog.module.css'


export default function Blog({resultado}) {

  
    return(
     
       <Layout
       pagina="Blog">
        <main className='contenedor'>
            <h2 className='heading'>¡Bienvenido al blog!</h2>
            <div className={styles.blog}>

        {resultado.map(resultado => <Entrada 
        key={resultado.id}
        resultado={resultado}/>)}
        </div>
        </main>
        </Layout>
       
    )
}

export async function getStaticProps(){

    const Url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
    const respuesta = await fetch(Url)
    const resultado = await respuesta.json()


    return{
        props:{
            resultado
        }
    }
}