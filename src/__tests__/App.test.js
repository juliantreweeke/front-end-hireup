import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import { mount } from 'enzyme';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('<App />', () => {

  it('renders 1 <App /> component', () => {
    const component = shallow(<App name="app"/>);
    expect(component).toHaveLength(1);
  });

  describe('it renders props correctly', () => {
    const component = shallow(<App name="app" />);
    expect(component.instance().props.name).toBe('app');
  })

  describe('has one div with class of .dropdown-wrapper', () => {
    const wrapper = mount(<App />);
    const searchbar = wrapper.find('.Dropdown-wrapper');
    expect(div).toHaveLength(1);

  })







});
