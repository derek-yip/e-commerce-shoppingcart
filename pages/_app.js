import Layout from '../public/component/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/scss/Slider/Slider.scss'
import '../styles/globals.scss'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
