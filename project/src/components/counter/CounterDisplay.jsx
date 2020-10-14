import React from 'react';
import { Text } from 'react-native';

import Style from '../../style';

function Display({ value }) {
  return (
  <Text style={Style.largerText}>{value}</Text>
  );
}

export default Display;