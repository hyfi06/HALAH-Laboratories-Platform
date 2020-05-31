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
        id: '5ec5ce16fc13ae1506000067',
        username: 'morse.cavendish.0997',
        typeOfUser: 'Bacteriologist',
        isActive: true,
        imageURL: 'http://dummyimage.com/200x200.jpg/dddddd/000000',
        firstName: 'Morse',
        lastName: 'Cavendish',
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
