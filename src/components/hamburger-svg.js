import * as React from "react";
import * as styles from './hamburger.module.css'

function Hamburger({ touched, clicked }) {

  function getClass(path) {
    if (!touched) {
      // We don't want any animating classes on the paths
      return ''
    } else {
      // We want either the open or closing animation class
      let cname = `${clicked ? styles.open : styles.close} `;
      switch (path) {
        case 'top':
          cname += styles.top; break;
        case 'middle':
          cname += styles.middle; break;
        case 'bottom':
          cname += styles.bottom; break;
        default:
          cname = '';
      }
      return cname;
    }  
  }

  return (
    <svg
      viewBox="0 0 39 30"
      width={39}
      height={39} //prevent cutoff vector on rotate
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={getClass('top')}
        fill="none"
        stroke="#000000"
        strokeWidth={3}
        d="M 0,1.5 h 39"
      />
      <path
        className={getClass('middle')}
        fill="none"
        stroke="#000000"
        strokeWidth={3}
        d="M 0,15 h 39"
      />
      <path
        className={getClass('bottom')}
        fill="none"
        stroke="#000000"
        strokeWidth={3}
        d="M 0,28.5 h 39"
      />
    </svg>
  );
}

export default Hamburger;

