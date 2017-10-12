import {newGame, makeGuess, toggleInfoModal} from './actions';

describe('newGame testing',() => {
  it('should return the action', ()=> {
    const action = newGame();
    expect(action.type).toEqual(
       'NEW_GAME'
    );
    expect(action.correctAnswer).toBeLessThanOrEqual(100);
    expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
  
  })
})