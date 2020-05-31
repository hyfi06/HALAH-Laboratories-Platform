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
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWM1Y2UxNmZjMTNhZTE1MDYwMDAwNjQiLCJ1c2VybmFtZSI6Im1heW5lLnNuYXNlbC40MTcxIiwic2NvcGVzIjpbXSwiaWF0IjoxNTkwNzM4OTc3LCJleHAiOjE1OTExNzA5Nzd9.5gPpAnLLjKD4-O8oWsbZ860Iy0JBNjW175QxV0PCur4',
      user: {
        id: '5ec5ce16fc13ae1506000064',
        username: 'mayne.snasel.4171',
        typeOfUser: 'Patient',
        isActive: false,
        imageURL: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        firstName: 'Mayne',
        lastName: 'Snasel',
        defaultPath: '/tests'
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
  // test('Hola test edit ', () => {
  //   const onSubmit = jest.fn();
  //   const component = render(
  //     <SessionProvider value={obj}>
  //       <EditUserForm userID='' />
  //     </SessionProvider>
  //   );
  //   act(() => {
  //     fireEvent.click(component.getByTestId('button-submited'));
  //   });
  //   expect(onSubmit).toHaveBeenCalled();
  // });
  // test('Should rendered of EditUserForm component', () => {
  //   const edit = render(
  //     <SessionProvider value={obj}>
  //       <EditUserForm userID='freddy.van.1009' />
  //     </SessionProvider>
  //   );

  //   expect(edit.getByTestId('useredit')).toBeInTheDocument();
  // });
  describe('<EditUserForm />', () => {
    afterEach(cleanup);
    test('Render del componente Employee', () => {
      const editUser = mount(
        <SessionProvider value={obj}>
          <EditUserForm setUpdateLoading={true} userID='freddy.van.1009' />
        </SessionProvider>
      );
      expect(editUser.length).toEqual(1);
    });
    test('Render del componente Employee', () => {
      const editUser = shallow(
        <SessionProvider value={obj}>
          <EditUserForm setUpdateLoading={true} userID='freddy.van.1009' />
        </SessionProvider>
      );
      expect(editUser.length).toEqual(1);
    });
  });
});
