import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from '../context/SessionContext';
import Header from './Header';
import Navbar from './Navbar';
import Modal from './Modal';
import MessageIcon from '../assets/icons/alarm.svg';
import '../assets/styles/components/Layout.scss';

function Layout({ children }) {
  const { session } = useSession();
  const [message, setMessage] = useState(false);
  const [messageResponse, setMessageResponse] = useState([]);

  function closeModal() {
    setMessage(false);
    setMessageResponse([]);
  }

  // eslint-disable-next-line consistent-return
  async function openModalMessage() {
    console.log('times');
    try {
      const URL = `${process.env.NEXT_PUBLIC_API_URL}/messages?patientId=${session.user.id}`;
      const config = {
        headers: { Authorization: `Bearer ${session.token}` },
      };
      const res = await axios.get(URL, config);
      if (res.data) {
        setMessageResponse(res.data.data);
        setMessage(true);
      }
    } catch (err) {
      return '';
    }
  }

  useEffect(() => {
    if (session && session.user.typeOfUser === 'Patient') {
      // eslint-disable-next-line consistent-return
      setInterval(() => {
        openModalMessage();
      }, 10000);
    }
  });

  return (
    <>
      <div className="layout">
        <Header />
        <div className="layout__container">
          <Navbar />
          <div className="layout__container__content">{children}</div>
        </div>
      </div>
      <Modal isOpen={message}>
        <div className="message">
          <MessageIcon className="message__icon" />
          { messageResponse.map((res) => (
            <strong className="message__text">{res.messageText}</strong>
          ))}
          <button className="btn" type="button" onClick={closeModal}>
            Accept
          </button>
        </div>
      </Modal>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
