import TestInfo from '../../components/TestInfo';
import { create } from 'react-test-renderer';
import Router from 'next/router';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { SessionProvider } from '../../context/SessionContext';

describe('TestInfo Component', () => {
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

  test('Should render TestInfo component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <TestInfo examName='' order={''} completed={true} />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<TestInfo />', () => {
    const component = mount(
      <SessionProvider value={obj}>
        <TestInfo examName='' order={''} completed={true} />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
