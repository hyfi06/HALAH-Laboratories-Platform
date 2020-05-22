import PropTypes from 'prop-types';
import { useSession } from '../context/SessionContext';
import EditIcon from '../assets/icons/edit.svg';
import DeleteIcon from '../assets/icons/delete.svg';
import ActivateIcon from '../assets/icons/activate.svg';

function UserRecordOptions({ active }) {
  const { session } = useSession();

  if (session && session.user.typeOfUser === 'admin') {
    return (
      <>
        {active ? (
          <td className="table__body__row__cell__options">
            <EditIcon className="table__body__row__cell__icon" />
            <DeleteIcon className="table__body__row__cell__icon--negative" />
          </td>
        ) : (
          <>
            <td className="table__body__row__cell__options">
              <ActivateIcon className="table__body__row__cell__icon--positive" />
            </td>
          </>
        )}
      </>
    );
  }

  return '';
}

UserRecordOptions.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default UserRecordOptions;
