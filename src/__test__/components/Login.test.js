import Login from '../../components/Login';
import Router from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { create } from 'react-test-renderer';
import {
  render,
  cleanup,
  fireEvent,
  screen,
  getByTestId,
  act,
  RenderResult,
  wait
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SessionProvider } from '../../context/SessionContext';

describe('Login Component', () => {
  afterEach(cleanup);
  const mockedRouter = { push: () => {} };
  Router.router = mockedRouter;
  const obj = {
    session: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWNkYTc2NjYxYjE3ZTUwYzg3NzIxYWIiLCJ1c2VybmFtZSI6Im1heW5lLnNuYXNlbC40MTcxIiwic2NvcGVzIjpbInNpZ25pbjphdXRoIiwic2lnbnVwOmF1dGgiLCJyZWFkOm1vdmllcyIsInJlYWQ6dXNlci1tb3ZpZXMiLCJjcmVhdGU6dXNlci1tb3ZpZXMiLCJkZWxldGU6dXNlci1tb3ZpZXMiXSwiaWF0IjoxNTkwNzI1MTIwLCJleHAiOjE1OTExNTcxMjB9.UjjAPEHWbqyPEwX6qcs2UhLvQ6rAeQIL-ME1LDnWBRo',
      user: {
        id: '5ecda76661b17e50c87721ab',
        username: 'mayne.snasel.4171',
        typeOfUser: 'Patient',
        isActive: true,
        imageURL: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        firstName: 'Mayne',
        lastName: 'Snasel',
        defaultPath: '/tests'
      }
    }
  };
  // before(function () {
  //   const button = button.querySelector('button');
  //   button.addEventListener(
  //     'click',
  //     () => {
  //       button;
  //     },
  //     true
  //   );
  // });

  test('Should render Login component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <Login />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('withFormik true input username renders fine', () => {
    const rendered = render(
      <SessionProvider value={obj}>
        <Login />
      </SessionProvider>
    );
    expect(rendered.getByTestId('username')).toBeInTheDocument();
    expect(rendered.container.getElementsByTagName('form')[0]).toBeDefined();
  });
  it('withFormik true button renders fine', () => {
    const rendered = render(
      <SessionProvider value={obj}>
        <Login />
      </SessionProvider>
    );
    expect(rendered.getByTestId('button-sign')).toBeInTheDocument();
    expect(rendered.container.getElementsByTagName('form')[0]).toBeDefined();
  });
});

// test('Should rendered of Login component', () => {
//   const login = render(<Login />);

//   expect(login.getByTestId('login-form')).toBeInTheDocument();
// });
// test('Testeando Login', () => {
//   expect(button).toHaveBeenCalledTimes(1);
// });

//   test('Hola', () => {
//     const handleLoginSubmit = jest.fn();
//     const component = render(<Login />);
//     act(() => {
//       fireEvent.click(component.getByTestId('button-sign'));
//     });
//     expect(handleLoginSubmit).toHaveBeenCalled();
//   });
// });

// describe('Test 2 of login', () => {
//   beforeEach(() => {
//     const handleLoginSubmit = jest.fn();
//     act(() => {
//       fireEvent.click(component.getByTestId('button-sign'));
//     });
//   });
// test('Hola', ()=>{
//       const component = render(<Login />);
//       expect(handleLoginSubmit).toHaveBeenCalled();

// })};
describe('Login test Component', () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    const onSubmit = jest.fn();
    act(() => {
      const component = render(<Login />);
      fireEvent.click(component.getByTestId('button-sign'));
    });
  });
  test('Should render login test component', () => {
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
