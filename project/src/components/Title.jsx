import React from 'react';
import { Text } from 'react-native';
import Style from '../style.js';

export default (props) => {
  return (
    <>
      <Text style={Style.largerText}>{props.principal}</Text>
      <Text style={Style.regularText}>{props.secondary}</Text>
    </>
  );
}
