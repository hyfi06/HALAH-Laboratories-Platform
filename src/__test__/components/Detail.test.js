import Detail from '../../components/Detail';
import { create } from 'react-test-renderer';
import Router from 'next/router';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { SessionProvider } from '../../context/SessionContext';
describe('Detail Component', () => {
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
  it('<Detail />', () => {
    const component = mount(
      <SessionProvider value={obj}>
        <Detail userID={''} />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
