import React from "react";
import { Text } from "react-native";

import Style from "../style";

export default () => {
  return (
    <Text style={Style.regularText}>Comp's works!</Text>
  );
}

export function Comp1() {
  return (
    <Text style={Style.smallText}>Comp1's works!</Text>
  );
}

export function Comp2() {
  return (
    <Text style={Style.smallText}>Comp2's works!</Text>
  );
}
