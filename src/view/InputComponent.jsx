import React from 'react';

const inputChanged = () => {
  console.log('inputChanged'); // eslint-disable-line
};

export default () => (
  <>
    <input
      onChange={() => {
        inputChanged();
      }}
    />
  </>
);

export const AdditinalInputComponent = () => (
  <>
    <input onChange={inputChanged()} />
  </>
);
