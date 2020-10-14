import React from 'react';
import { Text, Platform } from 'react-native';

function PlatformComp() {
    if (Platform.OS === 'android') return (<Text>Android's works!</Text>)
    if (Platform.OS === 'ios') return  (<Text>IOS's works!</Text>)
    return <Text>What!?</Text>
  }

export default PlatformComp;