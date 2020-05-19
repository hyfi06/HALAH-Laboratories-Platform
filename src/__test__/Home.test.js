import { mount } from 'enzyme';
import Home from '../pages/index';

describe('<Home />', () => {
  test('Render title', () => {
    const home = mount(<Home />);
    expect(home.find('h1').text()).toEqual('Welcome');
  });
});
