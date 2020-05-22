import Link from 'next/link';
import PropTypes from 'prop-types';
import '../assets/styles/components/Navbar.scss';
import UserIcon from '../assets/icons/user.svg';
import UsersIcon from '../assets/icons/users.svg';
import UserAddIcon from '../assets/icons/user-add.svg';
import UsersAddIcon from '../assets/icons/users-add.svg';
import LogoutIcon from '../assets/icons/logout.svg';

function Navbar({ id, firstName, lastName, typeOfUser, imageURL }) {
  function TypeOptions({ type }) {
    switch (type) {
      case 'admin':
        return (
          <>
            <Link href="/users">
              <li className="navbar__options__item">
                <UsersIcon className="navbar__options__item__icon" />
                <strong className="navbar__options__item__text">Users</strong>
              </li>
            </Link>
            <Link href="/add-user">
              <li className="navbar__options__item">
                <UserAddIcon className="navbar__options__item__icon" />
                <strong className="navbar__options__item__text">
                  Add User
                </strong>
              </li>
            </Link>
            <Link href="/add-users">
              <li className="navbar__options__item">
                <UsersAddIcon className="navbar__options__item__icon" />
                <strong className="navbar__options__item__text">
                  Add Users
                </strong>
              </li>
            </Link>
          </>
        );
      case 'doctor':
        return (
          <Link href="/patients">
            <li className="navbar__options__item">
              <UsersIcon className="navbar__options__item__icon" />
              <strong className="navbar__options__item__text">Patients</strong>
            </li>
          </Link>
        );
      case 'patient':
        return (
          <Link href="/test">
            <li className="navbar__options__item">
              <UsersIcon className="navbar__options__item__icon" />
              <strong className="navbar__options__item__text">Tests</strong>
            </li>
          </Link>
        );
      default:
        return (
          <Link href="/patients">
            <li className="navbar__options__item">
              <UsersIcon className="navbar__options__item__icon" />
              <strong className="navbar__options__item__text">Patients</strong>
            </li>
          </Link>
        );
    }
  }

  TypeOptions.propTypes = {
    type: PropTypes.string.isRequired,
  };

  return (
    <section className="navbar">
      <div className="navbar__user">
        <figure className="navbar__user__photo">
          <img className="navbar__user__photo__img" src={imageURL} alt="user" />
        </figure>
        <strong className="navbar__user__name">{`${firstName} ${lastName}`}</strong>
        <span className="navbar__user__type">{typeOfUser}</span>
      </div>
      <ul className="navbar__options">
        <Link href={`/profile/${id}`}>
          <li className="navbar__options__item">
            <UserIcon className="navbar__options__item__icon" />
            <strong className="navbar__options__item__text">Profile</strong>
          </li>
        </Link>
        <TypeOptions type={typeOfUser} />
        <Link href="/">
          <li className="navbar__options__item">
            <LogoutIcon className="navbar__options__item__icon" />
            <strong className="navbar__options__item__text">Logout</strong>
          </li>
        </Link>
      </ul>
    </section>
  );
}

Navbar.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  typeOfUser: PropTypes.string,
  imageURL: PropTypes.string,
};

Navbar.defaultProps = {
  id: '',
  firstName: '',
  lastName: '',
  typeOfUser: '',
  imageURL: 'https://i.imgur.com/oMJFiLX.jpg',
};

export default Navbar;
