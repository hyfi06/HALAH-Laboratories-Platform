import PropTypes from 'prop-types';
import '../assets/styles/components/Layout.scss';
import Header from './Header';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="layout__container">
        <Navbar />
        <div className="layout__container__content">{children}</div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
