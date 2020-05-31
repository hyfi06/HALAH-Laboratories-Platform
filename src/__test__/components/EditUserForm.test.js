import EditUserForm from '../../components/EditUserForm';
import { create } from 'react-test-renderer';
import { render, fireEvent, act, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Router from 'next/router';
import { shallow, mount } from 'enzyme';
import { SessionProvider } from '../../context/SessionContext';
describe('EditUserForm Component', () => {
  const mockedRouter = { push: () => {} };
  Router.router = mockedRouter;
  afterEach(cleanup);
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
  test('Should render EditUserForm component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <EditUserForm setUpdateLoading={true} userID='freddy.van.1009' />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<EditUserForm />', () => {
    const component = mount(
      <SessionProvider value={obj}>
        <EditUserForm setUpdateLoading={true} userID='freddy.van.1009' />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
