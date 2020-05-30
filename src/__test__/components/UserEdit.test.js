import UserEdit from '../../components/UserEdit';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('UserEdit Component', () => {
  test('Should render UserEdit component', () => {
    const component = create(
      <SessionProvider>
        <UserEdit />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
