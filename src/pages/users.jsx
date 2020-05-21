import PropTypes from 'prop-types';
import Filter from '../components/Filter';
import AdminTable from '../components/AdminTable';

function Users({ userType }) {
  return (
    <>
      <Filter typeOfUser={userType} />
      <AdminTable />
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
