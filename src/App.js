import React, { useState } from "react";

import Button from "./Components/Button";
import ButtonBox from "./Components/Button/ButtonBox";
import Screen from "./Components/Screen";
import Wrapper from "./Components/Wrapper";

import "./Styles/global.scss";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
            />
          );
        })}{" "}
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
