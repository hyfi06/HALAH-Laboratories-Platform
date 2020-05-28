import UsersTable from '../../components/UsersTable';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('UserTable Component', () => {
  test('Should render UserTable component', () => {
    const component = create(
      <SessionProvider>
        <UsersTable />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
