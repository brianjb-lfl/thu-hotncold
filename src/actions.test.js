import {newGame, makeGuess, toggleInfoModal, MAKE_GUESS, TOGGLE_INFO_MODAL, NEW_GAME} from './actions';

describe('newGame testing',() => {
  it('should return the newGame action', ()=> {
    const action = newGame();
    expect(action.type).toEqual(
       NEW_GAME
    );
    expect(action.correctAnswer).toBeLessThanOrEqual(100);
    expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
  
  })
})

describe('makeGuess testing', () => {
  it('should return the makeGuess action', () => {
    const number = 5;
    const action = makeGuess(number);
    expect(action).toEqual({
      type: MAKE_GUESS,
      guess: number
    })

  })
})

describe ('toggleInfoModal testing', () => {
  it('should return toggleInfoModal action', () => {
    const action = toggleInfoModal();
    expect(action).toEqual({
      type: TOGGLE_INFO_MODAL
    })
  })
})