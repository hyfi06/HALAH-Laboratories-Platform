import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { SessionProvider } from '../context/SessionContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === '/') {
    return <Component {...pageProps} />;
  }

  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
