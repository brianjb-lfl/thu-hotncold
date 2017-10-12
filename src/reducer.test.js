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

  // NEWGAME
  it('Should set state to initial state on newGame action', () => {
    const state = {
      guesses: [1],
      feedback: 'Game in progress',
      correctAnswer: 75,
      showInfoModal: true
    };
    const action = newGame();
    const newState = reducer(state, action);
    expect(newState.guesses.length).toEqual(0);
    expect(newState.feedback).toEqual('Make your guess!');
    expect(newState.showInfoModal).toEqual(false);
    expect(newState.correctAnswer).toBeLessThanOrEqual(100);
    expect(newState.correctAnswer).toBeGreaterThanOrEqual(0);
  })

  // TOGGLE
  it('Should toggle state.showInfoModal on toggleInfoModal action', () => {
    const state = {
      guesses: [1],
      feedback: 'Game in progress',
      correctAnswer: 75,
      showInfoModal: true
    };
    const action = toggleInfoModal();
    let newState = reducer(state, action);
    expect(newState.showInfoModal).toEqual(false);
    newState = reducer(newState, action);
    expect(newState.showInfoModal).toEqual(true);
  })

  //Make_Guess
  it('should render feedback', () => {
    const state = {
      guesses: [1],
      feedback: 'Game in progress',
      correctAnswer: 75,
      showInfoModal: true
    };
    const number = 70;
    const action = makeGuess(number);
    let newState = reducer(state, action);
    expect(newState.feedback).toEqual("You\'re Hot!");
    expect(newState.guesses).toEqual([1, number])
  })
it('should reject if not number', () => {
  const state = {
    guesses: [1],
    feedback: 'Game in progress',
    correctAnswer: 75,
    showInfoModal: true
  };
  const number = '';
  const action = makeGuess(number);
  let newState = reducer(state, action);
  expect(newState.feedback).toEqual("Please enter a valid number");
  expect(newState.guesses).toEqual([1])
})

});






// MAKE_GUESS
  // handles NaN
  // test input - get right feedback, and adds guess to array

