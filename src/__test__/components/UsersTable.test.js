import UsersTable from '../../components/UsersTable';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { SessionProvider } from '../../context/SessionContext';
describe('UserTable Component', () => {
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
  test('Should render UserTable component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <UsersTable />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<UserTable />', () => {
    const component = mount(
      <SessionProvider value={obj}>
        <UsersTable />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
