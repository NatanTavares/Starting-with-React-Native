import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "./src/components/Button";
import Counter from "./src/components/Counter";

import First from "./src/components/First";
import MinMax from "./src/components/MinMax";
import CompDefault, { Comp1, Comp2 } from "./src/components/Multi";
import RandomNumGen from "./src/components/RandomNumGen";
import Title from "./src/components/Title";

import FatherDirect from "./src/components/direct/Father";
import FatherIndirect from "./src/components/indirect/Father";
import CounterV2 from "./src/components/counter/CounterV2";
import PlatformComp from "./src/components/Diferent";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <First /> */}

      {/* <CompDefault /> */}
      {/* <Comp1 /> */}
      {/* <Comp2 /> */}

      {/* <MinMax X={1} Y={1} /> */}

      {/* <RandomNumGen num1={1} num2={30} /> */}
      {/* <RandomNumGen num1={1} num2={30} /> */}
      {/* <RandomNumGen num1={1} num2={30} /> */}

      {/* <Title principal="I'm principal title" secondary="I'm secondary" /> */}
      
      {/* <Button /> */}

      {/* <Counter /> */}

      {/* <FatherDirect /> */}
      {/* <FatherIndirect /> */}

      {/* <CounterV2 /> */}

      <PlatformComp />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#444',
    padding: 20,
  },
});
