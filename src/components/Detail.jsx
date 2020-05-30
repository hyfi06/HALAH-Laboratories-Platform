import PropTypes from 'prop-types';
import axios from 'axios';
import Router from 'next/router';
import { useState } from 'react';
import useRequest from '../hooks/useRequest';
import { useSession } from '../context/SessionContext';
import '../assets/styles/components/Detail.scss';
import ActivateIcon from '../assets/icons/activate.svg';
import AddIcon from '../assets/icons/add.svg';
import DeleteIcon from '../assets/icons/delete.svg';
import EditIcon from '../assets/icons/edit.svg';
import ErrorIcon from '../assets/icons/error.svg';
import SuccessIcon from '../assets/icons/success.svg';
import WarningIcon from '../assets/icons/warning.svg';
import User from './User';
import UserData from './UserData';
import Modal from './Modal';
import TestsTable from './TestsTable';

function Detail({ userID }) {
  const { session } = useSession();
  const [requestCount, setRequestCount] = useState(1);
  const [statusResponse, setStatusResponse] = useState(false);
  const [statusLoading, setStatusLoading] = useState(false);
  const [statusError, setStatusError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/users/${userID}`;
  const { response, loading, error } = useRequest(
    session.token,
    URL,
    requestCount
  );

  async function setUpdateStatus() {
    setStatusLoading(true);
    try {
      const config = {
        headers: { Authorization: `Bearer ${session.token}` }
      };
      const res = await axios.patch(
        URL,
        {
          isActive: !response.data.isActive
        },
        config
      );
      setStatusResponse(res);
    } catch (err) {
      setStatusError(err);
    }
    setStatusLoading(false);
    setOpenModal(true);
  }

  function updateStatus() {
    setOpenModal(true);
  }

  function addTest() {
    Router.push(`/add-test/${userID}`);
  }

  function editUser() {
    Router.push(`/edit-user/${userID}`);
  }

  function closeModal() {
    setOpenModal(false);
    setStatusResponse(false);
  }

  function getNewData() {
    setOpenModal(false);
    setStatusResponse(false);
    setRequestCount(requestCount + 1);
  }

  function ConfirmUpdateStatus() {
    if (statusLoading) {
      return (
        <div className='confirm-update-status'>
          <div className='loader' />
        </div>
      );
    }

    if (statusError) {
      return (
        <div className='confirm-update-status'>
          <ErrorIcon className='confirm-update-status__icon--negative' />
          <strong className='confirm-update-status__text'>
            {statusError.response.data.message}
          </strong>
          <div className='confirm-update-status__options'>
            <button type='button' className='btn' onClick={getNewData}>
              Accept
            </button>
          </div>
        </div>
      );
    }

    if (statusResponse) {
      return (
        <div className='confirm-update-status'>
          <SuccessIcon className='confirm-update-status__icon--positive' />
          <strong className='confirm-update-status__text'>
            {response.data.isActive
              ? 'User successfully removed'
              : 'User successfully reactivated'}
          </strong>
          <div className='confirm-update-status__options'>
            <button type='button' className='btn' onClick={getNewData}>
              Accept
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className='confirm-update-status'>
        <WarningIcon className='confirm-update-status__icon' />
        <strong className='confirm-update-status__text'>
          {response.data.isActive
            ? 'Are you sure to delete the user?'
            : 'Are you sure to reactivate the user?'}
        </strong>
        <div className='confirm-update-status__options'>
          <button type='button' className='btn--negative' onClick={closeModal}>
            Cancel
          </button>
          <button type='button' className='btn' onClick={setUpdateStatus}>
            Accept
          </button>
        </div>
      </div>
    );
  }

  function DetailOptions() {
    if (loading) {
      return <div className='loader' />;
    }

    if (error) {
      return <h3>{error.response.data.message}</h3>;
    }

    if (session.user.typeOfUser === 'Administrator') {
      if (response.data.isActive) {
        return (
          <div className='detail-options'>
            <EditIcon className='detail-options__item' onClick={editUser} />
            <DeleteIcon
              className='detail-options__item--negative'
              onClick={updateStatus}
            />
          </div>
        );
      }
      return (
        <div className='detail-options'>
          <ActivateIcon
            className='detail-options__item--positive'
            onClick={updateStatus}
          />
        </div>
      );
    }

    if (session.user.typeOfUser === 'Doctor' && response.data.isActive) {
      return (
        <div className='detail-options'>
          <AddIcon className='detail-options__item' onClick={addTest} />
        </div>
      );
    }

    return '';
  }

  function MedicalHistory() {
    if (session.user.typeOfUser !== 'Administrator') {
      return (
        <>
          <h2 className='detail__title'>Medical history</h2>
          <TestsTable
            username={response.data.username}
            className='detail__table'
          />
        </>
      );
    }

    return '';
  }

  return response && response.data ? (
    <div className='detail'>
      <User user={response.data} />
      <section className='detail__content'>
        <DetailOptions />
        <UserData user={response.data} />
        <MedicalHistory />
      </section>
      <Modal isOpen={openModal}>
        <ConfirmUpdateStatus />
      </Modal>
    </div>
  ) : (
    ''
  );
}

Detail.propTypes = {
  userID: PropTypes.string.isRequired
};

export default Detail;
