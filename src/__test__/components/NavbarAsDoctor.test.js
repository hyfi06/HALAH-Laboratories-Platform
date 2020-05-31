import Navbar from '../../components/Navbar';
import { create } from 'react-test-renderer';
import Router from 'next/router';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SessionProvider } from '../../context/SessionContext';

describe('Navbar as Doctor Component', () => {
  const mockedRouter = { push: () => {} };
  Router.router = mockedRouter;
  const obj = {
    session: {
      token: '',
      user: {
        id: '5ec5ce16fc13ae1506000066',
        username: 'cathie.toffaloni.8907',
        typeOfUser: 'Doctor',
        isActive: true,
        imageURL: 'http://dummyimage.com/200x200.jpg/5fa2dd/ffffff',
        firstName: 'Cathie',
        lastName: 'Toffaloni',
        defaultPath: '/patients'
      }
    }
  };

  test('Should render Navbar component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <Navbar />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
