/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useSession } from '../context/SessionContext';
import AddIcon from '../assets/icons/add.svg';
import DownloadIcon from '../assets/icons/download.svg';

function TestRecord({ test }) {
  const { session } = useSession();

  // eslint-disable-next-line consistent-return
  function displayOptions() {
    if (session && session.user.typeOfUser === 'Administrator') {
      return (
        <td className="table__body__row__cell__options">
          <AddIcon className="table__body__row__cell__icon" />
          <DownloadIcon className="table__body__row__cell__icon" />
        </td>
      );
    }

    if (session && session.user.typeOfUser === 'Doctor') {
      return (
        <td className="table__body__row__cell__options">
          <DownloadIcon className="table__body__row__cell__icon" />
        </td>
      );
    }

    if (session && session.user.typeOfUser === 'Bacteriologist') {
      return (
        <td className="table__body__row__cell__options">
          <AddIcon className="table__body__row__cell__icon" />
        </td>
      );
    }

    if (session && session.user.typeOfUser === 'Patient') {
      return (
        <td className="table__body__row__cell__options">
          <DownloadIcon className="table__body__row__cell__icon" />
        </td>
      );
    }
  }
  const TestRecordOptions = displayOptions();

  return (
    <tr className="table__body__row">
      <td className="table__body__row__cell__user">
        <p>{test._id}</p>
      </td>
      <td className="table__body__row__cell">
        <p>{test.name}</p>
      </td>
      <td className="table__body__row__cell">
        <p>{test.appointmentDate}</p>
      </td>
      {TestRecordOptions}
    </tr>
  );
}

TestRecord.propTypes = {
  test: PropTypes.object.isRequired,
};

export default TestRecord;
