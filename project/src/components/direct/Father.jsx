import React from 'react';
import { Text } from 'react-native';
import Children from './Children';

function Father() {
  const x = 13;
  const y = 100;

  return (
    <>
      <Children a={x} b={y} />
      <Children a={x + 100} b={y + 200} />
    </>
  );
}

export default Father;