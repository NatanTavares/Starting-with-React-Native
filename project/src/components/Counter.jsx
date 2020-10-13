import React, { useState } from "react";
import { Button, Text, View } from "react-native";

import Style from "../style";

function Counter() {
  const [value, setValue] = useState(0);
  
  function increment() {
    setValue(value + 1);
  }

  function decrement() {
    setValue(value - 1);
  }

  return (
    <>
      <Text style={Style.largerText}>{value}</Text>
      <View>
        <Button title="+ 1" onPress={increment} />
        <Button title="- 1" onPress={decrement} />
      </View>
    </>
  )
}

export default Counter;
