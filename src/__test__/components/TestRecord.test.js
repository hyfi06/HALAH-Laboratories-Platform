import TestRecord from '../../components/TestRecord';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('TestRecord Component', () => {
  test('Should render TestRecord component', () => {
    const component = create(
      <SessionProvider>
        <TestRecord />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
