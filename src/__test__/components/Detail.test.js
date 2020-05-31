import Detail from '../../components/Detail';
import { create } from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import Router from 'next/router';
import '@testing-library/jest-dom';
import { SessionProvider } from '../../context/SessionContext';
describe('Detail Component', () => {
  afterEach(cleanup);
  const mockedRouter = { push: () => {} };
  Router.router = mockedRouter;
  const obj = {
    session: {
      token: '',
      user: {
        id: '',
        username: '',
        typeOfUser: '',
        isActive: true,
        imageURL: '',
        firstName: '',
        lastName: '',
        defaultPath: ''
      }
    }
  };
  test('Should render Detail component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <Detail userID={''} />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
