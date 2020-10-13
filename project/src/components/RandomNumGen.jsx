import React from "react";
import { Text } from "react-native";

import Style from "../style";

export default ({ num1, num2 }) => {
  if (num1 < num2) {
    let aux = num1;
    num1 = num2;
    num2 = aux;
  }
  
  const delta = num1 - num2 + 1;
  const random = parseInt(Math.random() * delta) + num2;
  
  return (
  <Text style={Style.largerText}>Num generated = {random}</Text>
  );
}