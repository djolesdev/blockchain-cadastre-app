import React, { useLayoutEffect, useRef } from 'react'
import style from './ProgressBar.module.css'

const ProgressBar = () => {

  const circle1 = useRef<HTMLDivElement>(null)
  const line1 = useRef<HTMLDivElement>(null)
  const circle2 = useRef<HTMLDivElement>(null)
  const line2 = useRef<HTMLDivElement>(null)
  const circle3 = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    // Mozes lagano menjati klase od refova!!!

    // PROBAJ OVAKO
    // if (formStemp === nesto) {menjaj neki element}
  })

  return (
    <div className={style.container}>
        <div className={style.circle} ref={circle1}>1</div>
        <div className={style.line} ref={line1}></div>
        <div className={style.circle} ref={circle2}>2</div>
        <div className={style.line} ref={line2}></div>
        <div className={style.circle}ref={circle3}>3</div>
    </div>
  )
}

export default ProgressBar