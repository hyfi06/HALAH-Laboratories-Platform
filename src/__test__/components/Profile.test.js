import Profile from '../../components/Profile';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { SessionProvider } from '../../context/SessionContext';
describe('Profile Component', () => {
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
  test('Should render Profile component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <Profile userID='' />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<Profile />', () => {
    const component = mount(
      <SessionProvider value={obj}>
        <Profile userID='' />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
