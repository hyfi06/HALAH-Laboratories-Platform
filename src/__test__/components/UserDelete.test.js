import UserDelete from '../../components/UserDelete';
import { create } from 'react-test-renderer';
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
});
