import UserData from '../../components/UserData';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('UserData Component', () => {
  test('Should render UserData component', () => {
    const component = create(
      <SessionProvider>
        <UserData user={{}} />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
