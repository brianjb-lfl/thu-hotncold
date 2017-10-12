import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';

describe('reducer', () => {

  // NO ACTION
  it('Should initialize state when nothing passed', () => {
    const state = undefined;
    const action = {
      type: '__DUMMY'
    }
    const newState = reducer(state, action);
    expect(newState.guesses.length).toEqual(0);
    expect(newState.feedback).toEqual('Make your guess!');
    expect(newState.showInfoModal).toEqual(false);
    expect(newState.correctAnswer).toBeLessThanOrEqual(100);
    expect(newState.correctAnswer).toBeGreaterThanOrEqual(0);
  });

  // UNKNOWN ACTION
  it('Should return current state when unknown action passed', () => {
    const state = {
      guesses: [1],
      feedback: 'Make your guess!',
      correctAnswer: 17,
      showInfoModal: false
    };
    const action = {
      type: '__DUMMY'
    }
    const newState = reducer(state, action);
    expect(newState).toEqual(state);

  })


});







//UNKNOWN PASSED
// returns current state when unknown action passed

// NEW_GAME
  // updates state correctly

// MAKE_GUESS
  // handles NaN
  // test input - get right feedback, and adds guess to array

// TOGGLE_INFO_MODAL
// test that infoModal toggles state.showInfoModal