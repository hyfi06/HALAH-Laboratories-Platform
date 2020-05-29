import AddUserForm from '../../components/AddUserForm';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('AddUserForm Component', () => {
  test('Should render AddUserForm component', () => {
    const component = create(
      <SessionProvider>
        <AddUserForm />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
