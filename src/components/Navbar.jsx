import Router from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSession } from '../context/SessionContext';
import '../assets/styles/components/Navbar.scss';
import UserIcon from '../assets/icons/user.svg';
import UsersIcon from '../assets/icons/users.svg';
import UserAddIcon from '../assets/icons/user-add.svg';
import UsersAddIcon from '../assets/icons/users-add.svg';
import LogoutIcon from '../assets/icons/logout.svg';
import TestIcon from '../assets/icons/exam.svg';

function Navbar() {
  const { session } = useSession();

  function logout() {
    document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    Router.push('/');
  }

  function TypeOptions({ type }) {
    switch (type) {
      case 'Administrator':
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
      case 'Patient':
        return (
          <Link href="/tests">
            <li className="navbar__options__item">
              <TestIcon className="navbar__options__item__icon" />
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

  if (session && session.user) {
    return (
      <section className="navbar">
        <div className="navbar__user">
          <figure className="navbar__user__photo">
            <img
              className="navbar__user__photo__img"
              src={
                session.user.imageURL
                  ? session.user.imageURL
                  : 'https://i.imgur.com/oMJFiLX.jpg'
              }
              alt="user"
            />
          </figure>
          <strong className="navbar__user__name">{`${session.user.firstName} ${session.user.lastName}`}</strong>
          <span className="navbar__user__type">{session.user.typeOfUser}</span>
        </div>
        <ul className="navbar__options">
          <li
            className="navbar__options__item"
            onClick={() => {
              Router.push(`/profile/${session.user.id}`);
            }}
          >
            <UserIcon className="navbar__options__item__icon" />
            <strong className="navbar__options__item__text">Profile</strong>
          </li>
          <TypeOptions type={session.user.typeOfUser} />
          <li className="navbar__options__item" onClick={logout}>
            <LogoutIcon className="navbar__options__item__icon" />
            <strong className="navbar__options__item__text">Logout</strong>
          </li>
        </ul>
      </section>
    );
  }

  return <div className="loader" />;
}

export default Navbar;
