import Header from '../../components/Header';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('Header Component', () => {
  test('Should render Header component', () => {
    const component = create(
      <SessionProvider>
        <Header />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<Header />', () => {
    const component = mount(
      <SessionProvider>
        <Header />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
