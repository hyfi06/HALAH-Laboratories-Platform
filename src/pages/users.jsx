import PropTypes from 'prop-types';
import Filter from '../components/Filter';
import Table from '../components/Table';

function Users({ userType }) {
  return (
    <>
      <Filter typeOfUser={userType} />
      <Table />
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
