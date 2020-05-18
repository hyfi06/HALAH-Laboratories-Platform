import PropTypes from 'prop-types';

import Header from './Header';
import Navbar from './Navbar';

import '../assets/styles/components/Layout.scss';

export default function Layout({ name, typeOfUser, profilePicture, children }) {
  return (
    <main className="layout">
      <Header />
      <Navbar name={name} typeOfUser={typeOfUser} profilePicture={profilePicture} />
      <section className="content">{children}</section>
    </main>
  );
}

Layout.propTypes = {
  name: PropTypes.string.isRequired,
  typeOfUser: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  profilePicture: PropTypes.string,
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: 'Element',
};
