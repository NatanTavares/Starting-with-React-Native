import React from "react";
import { Text } from "react-native";

import Style from "../style";

export default (props) => {
  let { X, Y } = props;

  if (X < Y) {
    let aux = Y;
    Y = X;
    X = aux;
  }
  
  return (
    <Text style={Style.regularText}>The value {X} is greater than the value {Y}</Text>
  );
}