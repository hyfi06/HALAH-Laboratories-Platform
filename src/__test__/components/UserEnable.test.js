import UserEnable from '../../components/UserEnable';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { SessionProvider } from '../../context/SessionContext';
describe('UserEnable Component', () => {
  test('Should render UserEnable component', () => {
    const component = create(
      <SessionProvider>
        <UserEnable />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<UserEnable />', () => {
    const component = mount(
      <SessionProvider>
        <UserEnable />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
