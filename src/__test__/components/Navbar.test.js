import Navbar from '../../components/Navbar';
import { create } from 'react-test-renderer';
import Router from 'next/router';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import { SessionProvider } from '../../context/SessionContext';

describe('Navbar Component', () => {
  const mockedRouter = { push: () => {} };
  Router.router = mockedRouter;
  const obj = {
    session: {
      token: '',
      user: {
        id: '5ecda76661b17e50c87721ab',
        username: 'mayne.snasel.4171',
        typeOfUser: 'Patient',
        isActive: true,
        imageURL: 'http://dummyimage.com/200x200.png/ff4444/ffffff',
        firstName: 'Mayne',
        lastName: 'Snasel',
        defaultPath: '/tests'
      }
    }
  };

  test('Should render Navbar component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <Navbar />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<Navbar />', () => {
    const component = mount(
      <SessionProvider value={obj}>
        <Navbar />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
