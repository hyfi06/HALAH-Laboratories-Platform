import DetailTest from '../../components/DetailTest';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
describe('DetailTest Component', () => {
  const obj = {
    session: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWM1Y2UxNmZjMTNhZTE1MDYwMDAwNjciLCJ1c2VybmFtZSI6Im1vcnNlLmNhdmVuZGlzaC4wOTk3Iiwic2NvcGVzIjpbXSwiaWF0IjoxNTkwNzM5MDI3LCJleHAiOjE1OTExNzEwMjd9.QbrBLCTRlssaSy92INY55T9oWSgWbkaqDIo_fXcTJPg',
      user: {
        id: '5ec5ce16fc13ae1506000067',
        username: 'morse.cavendish.0997',
        typeOfUser: 'Bacteriologist',
        isActive: true,
        imageURL: 'http://dummyimage.com/200x200.jpg/dddddd/000000',
        firstName: 'Morse',
        lastName: 'Cavendish',
        defaultPath: '/patients'
      }
    }
  };
  test('Should render DetailTest component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <DetailTest userID={''} testID={''} />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
