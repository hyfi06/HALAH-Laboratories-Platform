import WarningIcon from '../assets/icons/warning.svg';
import '../assets/styles/components/UserEnable.scss';

function UserEnable() {
  return (
    <div className="user-enable">
      <WarningIcon className="user-enable__icon" />
      <h2 className="user-enable__text">Are you sure you want to enable this user?</h2>
      <div className="user-enable__buttons">
        <button className="btn--positive" type="submit">Confirm</button>
        <button className="btn--negative" type="submit">Cancel</button>
      </div>
    </div>
  );
}

export default UserEnable;
