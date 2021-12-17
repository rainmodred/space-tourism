import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import '@reach/tabs/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
