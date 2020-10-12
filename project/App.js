import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import First from "./src/components/First";
import MinMax from "./src/components/MinMax";
import CompDefault, { Comp1, Comp2 } from "./src/components/Multi";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* <First />

      <CompDefault />
      <Comp1 />
      <Comp2 /> */}

      <MinMax X={1} Y={1} />

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
