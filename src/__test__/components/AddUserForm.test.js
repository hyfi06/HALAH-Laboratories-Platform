import AddUserForm from '../../components/AddUserForm';
import { create } from 'react-test-renderer';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Router from 'next/router';
import { SessionProvider } from '../../context/SessionContext';
describe('AddUserForm Component', () => {
  const mockedRouter = { push: () => {} };
  Router.router = mockedRouter;
  test('Should render AddUserForm component', () => {
    const component = create(
      <SessionProvider>
        <AddUserForm />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  // test('Should rendered of AddUserForm component', () => {
  //   const addUserForm = render(
  //     <SessionProvider>
  //       <AddUserForm />
  //     </SessionProvider>
  //   );

  //   expect(addUserForm.getByTestId('add-form')).toBeInTheDocument();
  // });
  // test('Should rendered2 of AddUserForm component', () => {
  //   const addUserForm = render(
  //     <SessionProvider>
  //       <AddUserForm />
  //     </SessionProvider>
  //   );

  //   expect(addUserForm.getByTestId('addAvatar')).toBeInTheDocument();
  // });
  test('Hola test ', () => {
    const onSubmit = jest.fn();
    const component = render(
      <SessionProvider>
        <AddUserForm />
      </SessionProvider>
    );
    act(() => {
      fireEvent.click(component.getByTestId('button-submit'));
    });
    expect(onSubmit).toHaveBeenCalled();
  });
});
