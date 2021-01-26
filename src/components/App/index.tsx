import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNumber } from './selectors';
import { incrementSaga, decrementSaga } from './actionCreators';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const number: number = useSelector(getNumber);

  const handleIncrementClick = (e: React.MouseEvent): void => {
    dispatch(incrementSaga());
  }

  const handleDecrementClick = (e: React.MouseEvent): void => {
    dispatch(decrementSaga());
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleDecrementClick}>-1</button>
      <button onClick={handleIncrementClick}>+1</button>
    </>
  );
}

export default App;
