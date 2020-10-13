import React from "react";
import { Button } from "react-native";

export default (props) => {
  function exec() {
    console.warn('Exec1!');
  }

  return (
    <>
      <Button title="1.Execute!" onPress={exec} />
      <Button title="2.Execute!" onPress={event => console.warn('Exec2!')} />
    </>
  );
}
