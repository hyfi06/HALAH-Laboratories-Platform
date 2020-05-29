import Router from 'next/router';
import PropTypes from 'prop-types';

function TestRecord({ test }) {
  function testDetail() {
    Router.push(`/testDetail/${test._id}`);
  }

  return (
    <tr className="table__body__row" onClick={testDetail}>
      <td className="table__body__row__cell__user">
        <p>{test.shortName}</p>
      </td>
      <td className="table__body__row__cell">
        <p>{test.name}</p>
      </td>
      <td className="table__body__row__cell">
        <p>{test.appointmentDate}</p>
      </td>
    </tr>
  );
}

TestRecord.propTypes = {
  test: PropTypes.object.isRequired,
};

export default TestRecord;
