import Detail from '../../components/Detail';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('Detail Component', () => {
  test('Should render Detail component', () => {
    const component = create(
      <SessionProvider>
        <Detail userID={''} />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
