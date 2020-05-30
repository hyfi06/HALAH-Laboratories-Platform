import UserEdit from '../../components/UserEdit';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
import Router from 'next/router';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('UserEdit Component', () => {
  const mockedRouter = { push: () => {} };
  Router.router = mockedRouter;
  const obj = {
    session: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWM1Y2UxNmZjMTNhZTE1MDYwMDAwNmEiLCJ1c2VybmFtZSI6InRpZmYua2VuZGVyLjU2ODQiLCJzY29wZXMiOltdLCJpYXQiOjE1OTA3Mzg4MzAsImV4cCI6MTU5MTE3MDgzMH0.jIQdIXxhovhiLVjaQdEtEk1HbQreLmZuRWivKtnJocc',
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
  test('Should Snapshot UserEdit component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <UserEdit />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('Should rendered of  component', () => {
    const userEdit = render(
      <SessionProvider value={obj}>
        <UserEdit />
      </SessionProvider>
    );

    expect(userEdit.getByTestId('user-edit')).toBeInTheDocument();
  });
});
