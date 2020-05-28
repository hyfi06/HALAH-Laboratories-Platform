import UsersTable from '../../components/UsersTable';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('UserTable Component', () => {
  test('Should render Login component', () => {
    const component = create(
      <SessionProvider token='0e4c196cc37f26496bc27859b1efb40502f6f00df318139f48eecee002f069ce'>
        <UsersTable />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
