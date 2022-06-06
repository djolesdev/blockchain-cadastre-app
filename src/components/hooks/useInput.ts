import  React, { useState } from "react";
import { FormEvent } from "react";

const useInput = (validateLogic: (arg: string) => boolean) => {

    const [valueState, setValueState] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const isValueValid = validateLogic(valueState)
    const isInputInvalid = !isValueValid && isTouched

    const inputOnChange = (event: FormEvent<HTMLInputElement>): void => {
        setValueState(event.currentTarget.value)
    }

    const inputOnBlur = (): void => {
        setIsTouched(true)
    }

    const reset = (): void => {
        setValueState('')
        setIsTouched(false)
    }

  return {
        value: valueState,
        inputOnChange,
        inputOnBlur,
        isValueValid,
        isInputInvalid,
        reset
  }
}

export default useInput