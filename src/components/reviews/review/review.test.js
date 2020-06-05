import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Review from './review';

import { restaurants } from '../../../fixtures';

const review = restaurants[0].reviews[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  const component = mount(<Review {...review} />);
  it('should render', () => {
    expect(component.find('[data-id="review"]').length).toBe(1);
  });
  it('should render Rate', () => {
    expect(component.find('Rate').length).toBe(1);
  });
  it('should render User', () => {
    const user = review.user;
    expect(component.find('h4').text()).toBe(user);
  });
  it('should render Text', () => {
    const text = review.text;
    expect(component.find('p').text()).toBe(text);
  });
  it('should render all Star', () => {
    const value = review.rating;
    expect(component.find('Star').length).toBe(value);
  });
});
