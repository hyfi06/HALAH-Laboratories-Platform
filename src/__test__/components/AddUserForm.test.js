import AddUserForm from '../../components/AddUserForm';
import { create } from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { mount } from 'enzyme';
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

  it('Should AddUserForm button renders fine', () => {
    const component = render(
      <SessionProvider value={obj}>
        <AddUserForm />
      </SessionProvider>
    );
    expect(component.getByTestId('button-submit')).toBeInTheDocument();
  });
  it('<AddUserForm />', () => {
    const component = mount(
      <SessionProvider value={obj}>
        <AddUserForm />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
