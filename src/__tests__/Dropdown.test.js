import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../components/Dropdown';
import { select } from '../components/Dropdown';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
Enzyme.configure({ adapter: new Adapter() });
import { mount } from 'enzyme';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dropdown />, div);
});

describe('<Dropdown />', () => {

  it('renders 1 <Dropdown /> component', () => {
    const component = shallow(<Dropdown name="D\dropdown"/>);
    expect(component).toHaveLength(1);
  });

  it('renders an `.Dropdown-wrapper`', () => {
    const wrapper = shallow(<Dropdown/>);
    expect(wrapper.find('.Dropdown-wrapper')).toHaveLength(1);
  });



});
