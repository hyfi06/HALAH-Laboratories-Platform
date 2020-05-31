import Login from '../../components/Login';
import Router from 'next/router';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import { jest } from '@jest/globals';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SessionProvider } from '../../context/SessionContext';

describe('Login Component', () => {
  afterEach(cleanup);
  const mockedRouter = { push: () => {} };
  Router.router = mockedRouter;
  const obj = {
    session: {
      token: '',
      user: {
        id: '',
        username: '',
        typeOfUser: 'Patient',
        isActive: true,
        imageURL: '',
        firstName: '',
        lastName: '',
        defaultPath: ''
      }
    }
  };

  test('Should Snapshot Login component', () => {
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
  });
  it('withFormik true button renders fine', () => {
    const rendered = render(
      <SessionProvider value={obj}>
        <Login />
      </SessionProvider>
    );
    expect(rendered.getByTestId('button-sign')).toBeInTheDocument();
  });
  it('Mount of Login Component', () => {
    const login = mount(<Login />);
    expect(login.length).toEqual(1);
  });
  it('Mount of Login Component', () => {
    const login = shallow(<Login />);
    expect(login.length).toEqual(1);
  });
});
