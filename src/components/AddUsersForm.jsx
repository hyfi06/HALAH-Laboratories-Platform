import { useState } from 'react';
import axios from 'axios';
import { useSession } from '../context/SessionContext';
import '../assets/styles/components/AddUsersForm.scss';
import ErrorIcon from '../assets/icons/error.svg';
import SuccessIcon from '../assets/icons/success.svg';
import Modal from './Modal';

function AddUsersForm() {
  const { session } = useSession();
  const [errorCSV, setErrorCSV] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  function detectExtension() {
    const file = document.querySelector('input[type="file"]').files[0];
    if (file.name.includes('.csv')) {
      setErrorCSV('');
      setButtonDisabled(false);
    } else {
      setErrorCSV('The selected file is not a .csv');
      setButtonDisabled(true);
    }
  }

  async function addUsers() {
    if (!buttonDisabled) {
      setOpenModal(true);
      setLoading(true);
      try {
        const file = document.querySelector('input[type="file"]').files[0];
        const formData = new FormData();
        formData.append('csv', file);
        const URL = `${process.env.NEXT_PUBLIC_API_URL}/users/csv`;
        const config = {
          headers: { Authorization: `Bearer ${session.token}` },
        };
        const res = await axios.post(URL, formData, config);
        setResponse(res);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    } else {
      setErrorCSV('Select a .csv file');
    }
  }

  function closeModal() {
    setOpenModal(false);
  }

  function StatusMessage() {
    if (loading) {
      return (
        <div className="message">
          <div className="loader" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="message">
          <ErrorIcon className="message__icon--negative" />
          <strong className="message__text">An error ocurred</strong>
          <button className="btn" type="button" onClick={closeModal}>
            Accept
          </button>
        </div>
      );
    }

    if (response) {
      return (
        <div className="message">
          <SuccessIcon className="message__icon--positive" />
          <strong className="message__text">{response.data.message}</strong>
          <button className="btn" type="button" onClick={closeModal}>
            Accept
          </button>
        </div>
      );
    }

    return '';
  }

  return (
    <form className="add-users-form">
      <h3 className="add-users-form__title">
        Upload a .csv file with users data
      </h3>
      <div className="input">
        <label className="input__label">
          Users Data File
          <input
            className="input__field--img"
            type="file"
            onChange={detectExtension}
          />
        </label>
        {errorCSV ? <span className="input__error">{errorCSV}</span> : ''}
      </div>
      <button
        className={`btn${buttonDisabled ? '--disabled' : ''}`}
        type="button"
        onClick={addUsers}
      >
        Add Users
      </button>
      <Modal isOpen={openModal}>
        <StatusMessage />
      </Modal>
    </form>
  );
}
export default AddUsersForm;
