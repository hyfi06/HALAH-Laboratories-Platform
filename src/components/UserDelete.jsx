import WarningIcon from '../assets/icons/warning.svg';
import '../assets/styles/components/UserDelete.scss';

function UserDelete() {
  return (
    <div className="user-delete">
      <WarningIcon className="user-delete__icon" />
      <h2 className="user-delete__text">Are you sure you want to delete this user?</h2>
      <div className="user-delete__buttons">
        <button className="btn--positive" type="submit">Accept</button>
        <button className="btn--negative" type="submit">Cancel</button>
      </div>
    </div>
  );
}

export default UserDelete;