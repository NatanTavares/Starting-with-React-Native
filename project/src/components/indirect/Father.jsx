import React, { useState } from 'react';
import { Text } from 'react-native';
import Children from './Children';

import Style from '../../style';

function Father() {
  const [value, setValue] = useState(0);

  function showValue(number) {
    setValue(number);
  }

  return (
    <>
      <Text style={Style.largerText}>{value}</Text>
      <Children min={1} max={60} fun={showValue} />
    </>
  );
}

export default Father;