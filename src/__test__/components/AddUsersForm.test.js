import AddUsersForm from '../../components/AddUsersForm';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
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
  it('<AddUsersForm />', () => {
    const component = mount(
      <SessionProvider>
        <AddUsersForm />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
