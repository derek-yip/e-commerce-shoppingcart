import Layout from '../public/component/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/scss/Slider/Slider.scss';
import '../styles/globals.scss';
import { useEffect } from 'react';
import { ShoppingCartProvider } from '../public/context/ShoppingCartContext';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <ShoppingCartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShoppingCartProvider>
  );
}

export default MyApp;
