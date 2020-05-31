import TestInfo from '../../components/TestInfo';
import { create } from 'react-test-renderer';
import Router from 'next/router';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SessionProvider } from '../../context/SessionContext';

describe('TestInfo Component', () => {
  const mockedRouter = { push: () => {} };
  Router.router = mockedRouter;
  const obj = {
    session: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZWNkYTc2NjYxYjE3ZTUwYzg3NzIxYWIiLCJ1c2VybmFtZSI6Im1heW5lLnNuYXNlbC40MTcxIiwic2NvcGVzIjpbInNpZ25pbjphdXRoIiwic2lnbnVwOmF1dGgiLCJyZWFkOm1vdmllcyIsInJlYWQ6dXNlci1tb3ZpZXMiLCJjcmVhdGU6dXNlci1tb3ZpZXMiLCJkZWxldGU6dXNlci1tb3ZpZXMiXSwiaWF0IjoxNTkwNzI1MTIwLCJleHAiOjE1OTExNTcxMjB9.UjjAPEHWbqyPEwX6qcs2UhLvQ6rAeQIL-ME1LDnWBRo',
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

  test('Should render TestInfo component', () => {
    const component = create(
      <SessionProvider value={obj}>
        <TestInfo examName='' order={''} completed={true} />
      </SessionProvider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
