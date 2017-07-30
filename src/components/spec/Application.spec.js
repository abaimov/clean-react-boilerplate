import { shallow } from 'enzyme';
import Application from '../Application';

describe('Application', () => {
  it('should render "Application loaded"', () => {
    const rendered = shallow(<Application />);
    const applicationTitle = rendered.find('.Application__title');
    const expected = 'Application loaded';
    const actual = applicationTitle.text();
    expect(actual).toEqual(expected);
  });
});
