import Modal from '../../components/Modal';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('Modal Component', () => {
  test('Should render Modal component', () => {
    const component = create(
      <SessionProvider>
        <Modal isOpen={true}>
          <div></div>
        </Modal>
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<Modal />', () => {
    const component = mount(
      <SessionProvider>
        <Modal isOpen={true}>
          <div></div>
        </Modal>
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
