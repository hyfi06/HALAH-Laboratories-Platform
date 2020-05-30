import Login from '../../components/Login';
import { create } from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import { shallow } from 'enzyme';

describe('Login Component', () => {
  test('Should render Login component', () => {
    const component = create(<Login />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  // test('render', () => {
  //   const onSubmit = jest.fn();
  //   const login = shallow(<Login />);
  //   login.find('input[type="text"]').simulate('change', {
  //     target: { name: 'username', value: 'humberto' }
  //   });
  //   expect(login.state('username')).toEqual('humberto');
  // });
});
