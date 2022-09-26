import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children, pagina}){
    return(
        <div>
            <Head>
            <title>GuitarLA - {pagina}</title>
            <meta name='description' content='Sitio web de venta de guitarras'/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;600&display=swap" rel="stylesheet"/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}