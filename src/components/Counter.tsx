import React, { MouseEvent, useEffect, useState } from "react";
import st from "./Counter.module.css";
import { Button } from "./Button";
import { Display } from "./Display";

export function Counter() {
  const minValue: number = 0;
  const maxValue: number = 15;
  const [value, setValue] = useState<number>(minValue);

  //& function for work with local storage
  const setToLocalStorage = () => {
    localStorage.setItem("counterValue", JSON.stringify(value)); // some code
  };

  const getFromLocalStorage = () => {
    let valueAsString = localStorage.getItem("counterValue"); // here we get value as string of  our key from local storage
    let valueAsNumber;
    if (valueAsString) {
      valueAsNumber = JSON.parse(valueAsString); // convert to number
    }
    setValue(valueAsNumber); // set as value to dicplay in our counter
  };

  useEffect(getFromLocalStorage, []);

  useEffect(setToLocalStorage, [value]); // для передачи значения стейта в  localstorage

  const btnIncClickHandler = () => {
    value < maxValue && setValue(value + 1);
  };
  const btnResetClickHandler = () => {
    setValue(minValue);
  };

  // const setStepanToLocalStorage = () => {
  // localStorage.setItem("NameValue", "Stepan"); // some code
  // /};

  const clearLocalStorage = () => {
    localStorage.clear(); // method to clear from localstorage
  };

  // const removeStepanFromLocalStorage = () => {
  // localStorage.removeItem("NameValue");
  // };

  return (
    <div className={st.counterBox}>
      <Display value={value} maxValue={maxValue} minValue={minValue} />

      <div className={st.counterBtns}>
        {/*<button
          className={st.btn}
          onClick={btnIncClickHandler}
          disabled={value === maxValue}
        >
          inc 2 ls
        </button>
        <button
          className={st.btn}
          onClick={setToLocalStorage}
          // disabled={value === maxValue}
        >
          set 2 ls
        </button> */}
        {/*}<button
          className={st.btn}
          onClick={setStepanToLocalStorage}
          // disabled={value === maxValue}
        >
          set S to ls
        </button> */}
        {/* <button
          className={st.btn}
          onClick={getToLocalStorage}
          // disabled={value === maxValue}
        >
          get from ls
        </button> */}
        {/* <button
          className={st.btn}
          onClick={clearLocalStorage}
          // disabled={value === maxValue}
        >
          clear ls
        </button> */}
        {/* <button
          className={st.btn}
          onClick={removeStepanFromLocalStorage}
          // disabled={value === maxValue}
        >
          remove ls
        </button> */}
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
