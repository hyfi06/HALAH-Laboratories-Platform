import TestTable from '../../components/TestTable';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('TestTable Component', () => {
  test('Should render TestTable component', () => {
    const component = create(
      <SessionProvider>
        <TestTable />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
