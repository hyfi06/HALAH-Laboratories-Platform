import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === '/') {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
