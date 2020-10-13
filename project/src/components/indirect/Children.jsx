import React from 'react';
import { Text, Button } from 'react-native';

function Children({ min, max, fun }) {
  function randomNum(min, max) {
    const factor = max - min + 1;
    return parseInt(Math.random() * factor) + min;
  }

  return (
    <>
      <Button title="Execute" onPress={event => fun(randomNum(min, max))} />
    </>
  );
}

export default Children;