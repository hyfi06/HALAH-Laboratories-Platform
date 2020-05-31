import TestRecord from '../../components/TestRecord';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { SessionProvider } from '../../context/SessionContext';
describe('TestRecord Component', () => {
  const mock = {
    _id: '5ecda8f2e67da2531795ceb6',
    name: '1,25-Dihydroxyvitamin D, Serum',
    shortName: 'DHVD',
    isComplete: true,
    appointmentDate: '2020-05-27T23:40:34.096Z',
    createdAt: '2020-05-26T23:40:34.096Z',
    resultDate: '2020-05-26T23:41:15.057Z',
    resultId: '5ecda91b615c1553c4ef1bb8'
  };
  test('Should render TestRecord component', () => {
    const component = create(
      <SessionProvider>
        <TestRecord test={mock} />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('<TestRecord />', () => {
    const component = mount(
      <SessionProvider>
        <TestRecord test={mock} />
      </SessionProvider>
    );
    expect(component.length).toEqual(1);
  });
});
