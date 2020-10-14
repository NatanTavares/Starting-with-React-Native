import React from 'react';
import { Text, Platform } from 'react-native';

import Style from '../style';

function PlatformComp() {
    if (Platform.OS === 'android') return <Text style={Style.largerText}>Android's works!</Text>
    if (Platform.OS === 'ios') return  <Text style={Style.largerText}>IOS's works!</Text>
    return <Text style={Style.largerText}>What!?</Text>
  }

export default PlatformComp;