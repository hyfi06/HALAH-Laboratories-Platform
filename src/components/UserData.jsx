import PropTypes from 'prop-types';
import '../assets/styles/components/UserData.scss';

function UserData({ user }) {
  return (
    <div className="user-data">
      <h2 className="user-data__title"> User Information</h2>
      <div className="user-data__container">
        <div className="user-data__element">
          <strong className="user-data__element__title">Name</strong>
          <span className="user-data__element_content">{user.firstName}</span>
        </div>
        <div className="user-data__element">
          <strong className="user-data__element__title">Last Name</strong>
          <span className="user-data__element_content">{user.lastName}</span>
        </div>
        <div className="user-data__element">
          <strong className="user-data__element__title">Document ID</strong>
          <span className="user-data__element_content">{user.documentID}</span>
        </div>
      </div>
      <h2 className="user-data__title"> Contact</h2>
      <div className="user-data__container">
        <div className="user-data__element">
          <strong className="user-data__element__title">email</strong>
          <span className="user-data__element_content">{user.email}</span>
        </div>
        <div className="user-data__element">
          <strong className="user-data__element__title">Phone Number</strong>
          <span className="user-data__element_content">
            {user.contactNumber}
          </span>
        </div>
      </div>
    </div>
  );
}

UserData.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserData;
