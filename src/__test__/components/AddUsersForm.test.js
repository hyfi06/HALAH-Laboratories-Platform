import AddUsersForm from '../../components/AddUsersForm';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('AddUsersForm Component', () => {
  test('Should render AddUsersForm component', () => {
    const component = create(
      <SessionProvider>
        <AddUsersForm />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
