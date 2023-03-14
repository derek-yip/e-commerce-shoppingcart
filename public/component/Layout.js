
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head';

export default function Layout({ProductList,children }) {
  return (
    <div>
      <Head>
        <title>E-commerce</title>
      </Head>
      
      <Header />
        <main>{children}</main>        
      <Footer />
    </div>
  )
}