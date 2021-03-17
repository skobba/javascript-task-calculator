import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/actions';

const inputChanged = (newValue) => {
  console.log(newValue); // eslint-disable-line
};

export default () => {
  const dispatch = useDispatch();
  const theState = useSelector((state) => state);
  return (
    <>
      <input
        onChange={(e) => {
          inputChanged(e.target.value);
          dispatch({
            type: 'INPUT_CHANGED',
          });
          dispatch({ type: actions.INPUT_CHANGED, data: e.target.value });
        }}
      />

      <pre>{JSON.stringify(theState, null, 2)}</pre>
    </>
  );
};

export const AdditinalInputComponent = () => (
  <>
    <input
      onChange={() => {
        inputChanged();
      }}
    />
  </>
);
