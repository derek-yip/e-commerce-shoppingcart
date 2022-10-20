
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>E-commerce</title>
      </Head>
      
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}