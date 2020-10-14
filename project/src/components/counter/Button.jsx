import React from 'react';
import { Button, Text, View } from 'react-native';

import Style from '../../style';

function Buttons({ fn }) {
  return (
    <View>
      <Button title="+ 1" onPress={fn} />
    </View>
  );
}

export default Buttons;