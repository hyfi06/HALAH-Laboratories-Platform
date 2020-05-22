import { useState, useEffect } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import '../assets/styles/components/Layout.scss';
import Header from './Header';
import Navbar from './Navbar';

function Layout({ children }) {
  const [session, setSession] = useState({});

  useEffect(() => {
    try {
      setSession(
        JSON.parse(
          document.cookie.replace(
            /(?:(?:^|.*;\s*)session\s*\=\s*([^;]*).*$)|^.*$/,
            '$1',
          ),
        ),
      );
    } catch (error) {
      Router.push('/');
    }
  }, []);

  return (
    <div className="layout">
      <Header />
      <div className="layout__container">
        <Navbar {...session.user} />
        <div className="layout__container__content">{children}</div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
