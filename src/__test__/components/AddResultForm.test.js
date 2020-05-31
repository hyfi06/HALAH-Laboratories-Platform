import AddResultForm from '../../components/AddResultForm';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { SessionProvider } from '../../context/SessionContext';
describe('AddResultForm Component', () => {
  const obj = {
    session: {
      token: '',
      user: {
        id: '',
        username: '',
        typeOfUser: '',
        isActive: true,
        imageURL: '',
        firstName: '',
        lastName: '',
        defaultPath: ''
      }
    }
  };
  test('Should render AddResultForm component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <AddResultForm userID={''} orderId={''} />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<AddResultForm />', () => {
    const component = mount(
      <SessionProvider value={obj}>
        <AddResultForm userID={''} orderId={''} />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
