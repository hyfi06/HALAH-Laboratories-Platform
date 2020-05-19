/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app';

import Layout from '../components/Layout';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    if (Component.name === 'Home') {
      return <Component {...pageProps} />;
    }

    return (
      <Layout name="Alberto Camarena" typeOfUser="Administrator">
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
