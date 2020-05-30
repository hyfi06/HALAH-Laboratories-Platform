import Login from '../../components/Login';
import { create } from 'react-test-renderer';
describe('Login Component', () => {
  test('Should render Login component', () => {
    const component = create(<Login />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
