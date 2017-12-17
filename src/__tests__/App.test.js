import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
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


  it('renders an `.logo`', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.App-logo')).toHaveLength(1);
  });

  it('renders an `.App-header`', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });

  it('renders an `#search-bar`', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('#search-bar')).toHaveLength(1);
  });

  it('renders an `.mobile-menu`', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.mobile-menu')).toHaveLength(1);
  });

  it('renders and matches our snapshot', () => {
  const component = renderer.create(
    <App name="app" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});





});
