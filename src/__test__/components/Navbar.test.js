import Navbar from '../../components/Navbar';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('Navbar Component', () => {
  test('Should render Navbar component', () => {
    const component = create(
      <SessionProvider>
        <Navbar />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
