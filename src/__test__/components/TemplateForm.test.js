import TemplateForm from '../../components/TemplateForm';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import { SessionProvider } from '../../context/SessionContext';
import * as nextRouter from 'next/router';
describe('TemplateForm Component', () => {
  nextRouter.useRouter = jest.fn();
  nextRouter.useRouter.mockImplementation(() => ({
    route: '/',
    query: {
      orderID: '5ecda76661b17e50c87721ab'
    }
  }));
  const obj = {
    session: {
      token: '',
      user: {
        id: '',
        username: '',
        typeOfUser: '',
        isActive: true,
        imageURL: '',
        firstName: '',
        lastName: '',
        defaultPath: ''
      }
    }
  };

  test('Should render TemplateForm component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <TemplateForm examName='' />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<TemplateForm />', () => {
    const component = mount(
      <SessionProvider value={obj}>
        <TemplateForm examName='' />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
