import User from '../../components/User';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('User Component', () => {
  test('Should render User component', () => {
    const component = create(
      <SessionProvider>
        <User user={{}} isActive={true} />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
