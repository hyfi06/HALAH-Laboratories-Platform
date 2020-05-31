import TestsTable from '../../components/TestsTable';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { SessionProvider } from '../../context/SessionContext';
describe('TestsTable Component', () => {
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
  test('Should render TestTable component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <TestsTable username='' />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<TestsTable />', () => {
    const component = mount(
      <SessionProvider value={obj}>
        <TestsTable username='' />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
