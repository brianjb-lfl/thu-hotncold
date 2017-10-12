import React from 'react';
import {shallow} from 'enzyme';

import {Header} from './header';
import InfoModal from './info-modal';

describe('<Header />', () => {
  it('Renders without crashing', () => {
      shallow(<Header />);
  });

  it('Hides the info modal when showInfoModal is false', () => {
      const wrapper = shallow(<Header showInfoModal={false}/>);
      expect(wrapper.find(InfoModal).length).toEqual(0);
  });

  it('Displays the info modal when showInfoModal is true', () => {
    const wrapper = shallow(<Header showInfoModal={true}/>);
    expect(wrapper.find(InfoModal).length).toEqual(1);
  });

});
