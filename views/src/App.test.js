import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App /> testing', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have 1 form, 2 inputs and 1 output paragraph', () => {
    const appComp = shallow(<App />);
    expect(appComp.find('form').length).toEqual(1);
    expect(appComp.find('input').length).toEqual(2);
    expect(appComp.find('p').length).toEqual(1);
  });

  it('should show output median array in output', () => {
    const appComp = shallow(<App />);
    const expectedOutput = '<p>Median: [3,5]</p>';

    appComp.setState({result: 'Median: [3,5]'});
    const realOutput = appComp.find('p').html();

    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });

  it('should show error when state property error is there', () => {
    const appComp = shallow(<App />);
    const expectedOutput = '<p>Error: Parameter is not an integer.</p>';

    appComp.setState({error: 'Error: Parameter is not an integer.'});
    const realOutput = appComp.find('p').html();

    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });
});