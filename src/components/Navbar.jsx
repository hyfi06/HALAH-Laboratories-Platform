import Link from 'next/link';
import '../assets/styles/components/Navbar.scss';
import UserIcon from '../assets/icons/user.svg';
import UsersIcon from '../assets/icons/users.svg';
import UserAddIcon from '../assets/icons/user-add.svg';
import UsersAddIcon from '../assets/icons/users-add.svg';
import LogoutIcon from '../assets/icons/logout.svg';

function Navbar() {
  return (
    <section className="navbar">
      <div className="navbar__user">
        <figure className="navbar__user__photo">
          <img
            className="navbar__user__photo__img"
            src="https://i.imgur.com/oMJFiLX.jpg"
            alt="user"
          />
        </figure>
        <strong className="navbar__user__name">María Jaramillo</strong>
        <span className="navbar__user__type">Administrator</span>
      </div>
      <ul className="navbar__options">
        <Link href="/">
          <li className="navbar__options__item">
            <UserIcon className="navbar__options__item__icon" />
            <strong className="navbar__options__item__text">Profile</strong>
          </li>
        </Link>
        <Link href="/">
          <li className="navbar__options__item">
            <UsersIcon className="navbar__options__item__icon" />
            <strong className="navbar__options__item__text">Users</strong>
          </li>
        </Link>
        <Link href="/">
          <li className="navbar__options__item">
            <UserAddIcon className="navbar__options__item__icon" />
            <strong className="navbar__options__item__text">Add User</strong>
          </li>
        </Link>
        <Link href="/">
          <li className="navbar__options__item">
            <UsersAddIcon className="navbar__options__item__icon" />
            <strong className="navbar__options__item__text">Add Users</strong>
          </li>
        </Link>
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

export default Navbar;
