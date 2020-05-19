import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === '/') {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
