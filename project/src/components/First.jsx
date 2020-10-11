import React from 'react';
import { StyleSheet, Text } from 'react-native'

export default (props) => {
  return (
    <Text style={styles.paragraph}>Hello World!</Text>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    color: 'red',
  },
});
