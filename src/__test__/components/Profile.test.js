import Profile from '../../components/Profile';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('Profile Component', () => {
  test('Should render Profile component', () => {
    const component = create(
      <SessionProvider>
        <Profile userID='' />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
