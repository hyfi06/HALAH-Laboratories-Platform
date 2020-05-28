import Modal from '../../components/Modal';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('Modal Component', () => {
  test('Should render Modal component', () => {
    const component = create(
      <SessionProvider>
        <Modal />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
