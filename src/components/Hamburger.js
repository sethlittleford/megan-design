import * as React from "react";
import * as styles from './hamburger.module.css'

function Hamburger({ clicked }) {
  return (
    <svg
      viewBox="0 0 39 30"
      width={39}
      height={39} //prevent cutoff vector on rotate
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`${styles.top}  ${clicked ? styles.clicked : ''}`}
        fill="none"
        stroke="#000000"
        strokeWidth={3}
        d="M 0,1.5 h 39"
      />
      <path
        className={`${styles.middle}  ${clicked ? styles.clicked : ''}`}
        fill="none"
        stroke="#000000"
        strokeWidth={3}
        d="M 0,15 h 39"
      />
      <path
        className={`${styles.bottom}  ${clicked ? styles.clicked : ''}`}
        fill="none"
        stroke="#000000"
        strokeWidth={3}
        d="M 0,28.5 h 39"
      />
    </svg>
  );
}

export default Hamburger;

