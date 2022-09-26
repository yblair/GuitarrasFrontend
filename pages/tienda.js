import Layout from '../components/Layout'
import Listado from '../components/Listado'


export default function Tienda({guitarras}) {
    return(
     
       <Layout
       pagina="Tienda virtual">
       <main className='contenedor'>
        <h1 className='heading'>Nuestra coleccion</h1>
       <Listado
       guitarras={guitarras}
       />
       </main>
        </Layout>
       
    )
}

export async function getServerSideProps(){
    const url = `${process.env.API_URL}/guitarras?_sort=created_at:desc`
    const respuesta = await fetch(url)
    const guitarras = await respuesta.json()
   
    return{
        props:{
            guitarras
        }
    }
}