import Header from '../../components/Header';
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
});
