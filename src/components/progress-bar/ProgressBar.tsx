import React, { useLayoutEffect, useRef } from "react";
import style from "./ProgressBar.module.css";
import { useAppSelector } from "../../store/redux-hooks/hooks";

const ProgressBar = () => {
  const circle1 = useRef<HTMLDivElement>(null);
  const line1 = useRef<HTMLDivElement>(null);
  const circle2 = useRef<HTMLDivElement>(null);
  const line2 = useRef<HTMLDivElement>(null);
  const circle3 = useRef<HTMLDivElement>(null);

  const formStep = useAppSelector((state) => state.form.step);

  const circles = [circle1, circle2, circle3];

  useLayoutEffect(() => {
    circles.forEach((circle, index) => {
      if (formStep - 1 === index) {
        circle.current?.classList.add(style.active);
      } else {
        circle.current?.classList.remove(style.active);
      }


    });
  });

  return (
    <div className={style.container}>
      <div className={style.circle} ref={circle1}>
        1
      </div>
      <div className={style.line} ref={line1}></div>
      <div className={style.circle} ref={circle2}>
        2
      </div>
      <div className={style.line} ref={line2}></div>
      <div className={style.circle} ref={circle3}>
        3
      </div>
    </div>
  );
};

export default ProgressBar;
