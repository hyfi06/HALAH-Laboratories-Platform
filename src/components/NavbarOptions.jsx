import PropTypes from 'prop-types';

import LogoProfile from '../assets/icons/user.svg';
import LogoUsers from '../assets/icons/users.svg';
import LogoAddUser from '../assets/icons/user-add.svg';
import LogoAddUsers from '../assets/icons/users-add.svg';
import LogoLogout from '../assets/icons/logout.svg';

import '../assets/styles/components/NavbarOptions.scss';

export default function NavbarOptions({ typeOfUser }) {
  return (
    <ul className="list">
      <li className="list_item">
        <LogoProfile className="logo" />
        <strong>Profile</strong>
      </li>
      <li className="list_item">
        <LogoUsers className="logo" />
        <strong>Users</strong>
      </li>
      <li className="list_item">
        <LogoAddUser className="logo" />
        <strong>Add User</strong>
      </li>
      <li className="list_item">
        <LogoAddUsers className="logo" />
        <strong>Add Users</strong>
      </li>
      <li className="list_item">
        <LogoLogout className="logo" />
        <strong>Logout</strong>
      </li>
    </ul>
  );
}

NavbarOptions.propTypes = {
  typeOfUser: PropTypes.string.isRequired,
};
