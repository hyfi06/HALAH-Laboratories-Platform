import UserRecord from '../../components/UserRecord';
import { create } from 'react-test-renderer';
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
});
