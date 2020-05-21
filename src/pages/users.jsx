import PropTypes from 'prop-types';
import Filter from '../components/Filter';
import UsersTable from '../components/UsersTable';

function Users({ userType }) {
  return (
    <>
      <Filter typeOfUser={userType} />
      <UsersTable />
    </>
  );
}

Users.propTypes = {
  userType: PropTypes.string,
};

Users.defaultProps = {
  userType: 'administrator',
};

export default Users;
