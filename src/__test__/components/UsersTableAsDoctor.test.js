import UsersTable from '../../components/UsersTable';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('UserTable Component', () => {
  const obj = {
    session: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWM1Y2UxNmZjMTNhZTE1MDYwMDAwNjYiLCJ1c2VybmFtZSI6ImNhdGhpZS50b2ZmYWxvbmkuODkwNyIsInNjb3BlcyI6W10sImlhdCI6MTU5MDczOTA1OSwiZXhwIjoxNTkxMTcxMDU5fQ.CQzV_Izf5Z4eAFmaNABXROrreMfXO5f_qMoZYb41L38',
      user: {
        id: '5ec5ce16fc13ae1506000066',
        username: 'cathie.toffaloni.8907',
        typeOfUser: 'Doctor',
        isActive: true,
        imageURL: 'http://dummyimage.com/200x200.jpg/5fa2dd/ffffff',
        firstName: 'Cathie',
        lastName: 'Toffaloni',
        defaultPath: '/patients'
      }
    }
  };
  test('Should render UserTable component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <UsersTable />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
