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
        id: '5ec5ce16fc13ae150600006a',
        username: 'tiff.kender.5684',
        typeOfUser: 'Administrator',
        isActive: true,
        imageURL: 'http://dummyimage.com/200x200.jpg/ff4444/ffffff',
        firstName: 'Tiff',
        lastName: 'Kender',
        defaultPath: '/users'
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
