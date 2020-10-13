import React from 'react';
import { Text } from 'react-native';

function Children({ a, b }) {
  return (
    <>
      <Text>A: {a}</Text>
      <Text>B: {b}</Text>
    </>
  );
}

export default Children;