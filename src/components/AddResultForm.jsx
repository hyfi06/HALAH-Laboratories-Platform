import PropTypes from 'prop-types';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import TemplateForm from './TemplateForm';

function AddResultForm({ orderId }) {
  const { session } = useSession();
  const { response, loading, error } = useRequest(
    session.token,
    `${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}`,
    1,
  );

  if (loading) {
    return <div className="loader" />;
  }

  if (error) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div className="add-result">
      {response && response.data ? (
        <TemplateForm examName={response.data.shortName} />
      ) : (
        ''
      )}
    </div>
  );
}

AddResultForm.propTypes = {
  orderId: PropTypes.string.isRequired,
};

export default AddResultForm;
