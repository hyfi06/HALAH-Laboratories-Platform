import DetailTest from '../../components/DetailTest';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { SessionProvider } from '../../context/SessionContext';
describe('DetailTest Component', () => {
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
  test('Should render DetailTest component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <DetailTest userID={''} testID={''} />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<DetailTest />', () => {
    const component = mount(
      <SessionProvider value={obj}>
        <DetailTest userID={''} testID={''} />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
