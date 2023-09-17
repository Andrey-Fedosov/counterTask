import React, { MouseEvent, useState } from "react";
import st from "./Counter.module.css";
import { Button } from "./Button";
import { Display } from "./Display";

export function Counter() {
  const minValue: number = 0;
  const maxValue: number = 5;
  const [value, setValue] = useState(minValue);

  const btnIncClickHandler = () => {
    value < maxValue && setValue(value + 1);
  };
  const btnResetClickHandler = () => {
    setValue(minValue);
  };

  return (
    <div className={st.counterBox}>
      <Display value={value} maxValue={maxValue} minValue={minValue} />
      {/* <div className={st.counterDisplay}>{value}</div> */}
      <div className={st.counterBtns}>
        <Button
          className={st.btn}
          name="inc"
          callback={btnIncClickHandler}
          isDisabled={value === maxValue}
        />
        <Button
          className={st.btn}
          name="reset"
          callback={btnResetClickHandler}
          isDisabled={value === minValue}
        />
      </div>
    </div>
  );
}
