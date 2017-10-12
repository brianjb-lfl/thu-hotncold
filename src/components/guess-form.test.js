import React from 'react';
import {shallow, mount} from 'enzyme';
import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';



describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the onGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm dispatch={callback} />);
        const value = 10;
        console.log('wrapper', wrapper.debug());
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(makeGuess(value.toString()));
    });

    // it('Should reset the input when the form is submitted', () => {
    //     const wrapper = mount(<GuessForm />);
    //     const input = wrapper.find('input[type="text"]');
    //     input.instance().value = 10;
    //     wrapper.simulate('submit');
    //     expect(input.instance().value).toEqual('');
    // });
});