import React from 'react'
import style from './ProgressBar.module.css'

const ProgressBar = () => {
  return (
    <div className={style.container}>
        <div className={style.circle}>1</div>
        <div className={style.line}></div>
        <div className={style.circle}>2</div>
        <div className={style.line}></div>
        <div className={style.circle}>3</div>
    </div>
  )
}

export default ProgressBar