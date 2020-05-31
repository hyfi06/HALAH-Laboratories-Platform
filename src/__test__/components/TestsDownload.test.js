import TestsDownload from '../../components/TestsDownload';
import { create } from 'react-test-renderer';
import Router from 'next/router';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { SessionProvider } from '../../context/SessionContext';

describe('TestsDownload Component', () => {
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

  test('Should render TestsDownload component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <TestsDownload />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<Tests Download />', () => {
    const component = mount(
      <SessionProvider value={obj}>
        <TestsDownload />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
