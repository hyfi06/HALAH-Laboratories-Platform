import AddUserForm from '../../components/AddUserForm';
import { create } from 'react-test-renderer';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { mount } from 'enzyme';
import Router from 'next/router';
import * as nextRouter from 'next/router';
import { SessionProvider } from '../../context/SessionContext';
describe('AddUserForm Component', () => {
  nextRouter.useRouter = jest.fn();
  nextRouter.useRouter.mockImplementation(() => ({
    route: '/',
    query: {
      orderID: '5ecda76661b17e50c87721ab'
    }
  }));
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
  test('Should render AddUserForm component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <AddUserForm />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('withFormik true AddUserForm username renders fine', () => {
    const component = render(
      <SessionProvider value={obj}>
        <AddUserForm />
      </SessionProvider>
    );
    expect(component.getByTestId('button-submit')).toBeInTheDocument();
  });
  it('Render del componente AddUserForm', () => {
    const addUserForm = mount(
      <SessionProvider value={obj}>
        <AddUserForm />
      </SessionProvider>
    );
    expect(addUserForm.length).toEqual(1);
  });
});
