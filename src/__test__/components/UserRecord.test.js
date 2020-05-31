import UserRecord from '../../components/UserRecord';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { SessionProvider } from '../../context/SessionContext';
describe('UserRecord Component', () => {
  test('Should render UserRecord component', () => {
    const component = create(
      <SessionProvider>
        <UserRecord user={{}} />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<UserRecord />', () => {
    const component = mount(
      <SessionProvider>
        <UserRecord user={{}} />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
