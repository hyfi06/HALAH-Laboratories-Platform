import UserDelete from '../../components/UserDelete';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { SessionProvider } from '../../context/SessionContext';
describe('UserDelete Component', () => {
  test('Should render UserDelete component', () => {
    const component = create(
      <SessionProvider>
        <UserDelete />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<UserDelete />', () => {
    const component = mount(
      <SessionProvider>
        <UserDelete />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
