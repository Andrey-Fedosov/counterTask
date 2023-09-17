import React, { MouseEvent, useState } from "react";
import st from "./Counter.module.css";

export function Counter() {
  const minValue: number = 0;
  const maxValue: number = 5;
  const [value, setValue] = useState(minValue);

  const btnIncClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setValue(value + 1);
  };
  const btnResetClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setValue(minValue);
  };

  return (
    <div className={st.counterBox}>
      <div className={st.counterDisplay}>{value}</div>
      <div className={st.counterBtns}>
        <button className={st.btn} onClick={btnIncClickHandler}>
          inc
        </button>
        <button className={st.btn} onClick={btnResetClickHandler}>
          reset
        </button>
      </div>
    </div>
  );
}
