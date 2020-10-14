import React, { useState } from 'react';
import Button from './Button';
import Display from './CounterDisplay';

function CounterV2() {
  const [value, setValue] = useState(0);

  function inc() {
    setValue(value + 1);
  }

  function dec() {
    setValue(value - 1);
  }

  return (
    <>
      <Display value={value} />
      <Button fn={inc} />
      <Button fn={dec} />
    </>
  );
}

export default CounterV2;