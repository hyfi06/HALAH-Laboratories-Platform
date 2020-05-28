import UserEnable from '../../components/UserEnable';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('UserEnable Component', () => {
  test('Should render Login component', () => {
    const component = create(
      <SessionProvider>
        <UserEnable />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
