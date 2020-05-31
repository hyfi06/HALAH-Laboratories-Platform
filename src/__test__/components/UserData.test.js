import UserData from '../../components/UserData';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
import { mount } from 'enzyme';
describe('UserData Component', () => {
  test('Should render UserData component', () => {
    const component = create(
      <SessionProvider>
        <UserData user={{}} />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<UserData />', () => {
    const component = mount(
      <SessionProvider>
        <UserData user={{}} />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
