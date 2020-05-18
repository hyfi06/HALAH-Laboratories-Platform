import PropTypes from 'prop-types';

import NavbarOptions from './NavbarOptions';

import '../assets/styles/components/Navbar.scss';

export default function Navbar({ name, typeOfUser, profilePicture }) {
  return (
    <section className="container card">
      <div>
        <img className="image" alt="user profile pic" src={profilePicture} />
        <h3>{name}</h3>
        <p>{typeOfUser}</p>
      </div>
      <NavbarOptions typeOfUser={typeOfUser} />
    </section>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  typeOfUser: PropTypes.string.isRequired,
  profilePicture: PropTypes.string,
};

Navbar.defaultProps = {
  profilePicture: '/default.png',
};
