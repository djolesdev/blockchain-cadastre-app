import React from "react";
import { useNavigate } from "react-router-dom";
import { isIdentifier } from "typescript";
import { RealEstate } from "../../../blockchain/models/RealEstate";
import { nextStep } from "../../../store/form-slice";
import { setRealEstate } from "../../../store/real-estate-slice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../store/redux-hooks/hooks";
import useInput from "../../hooks/useInput";
import "../Form.css";

const RealEstateForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const municipality = useInput((value) => value.length >= 5);
  const squareFootage = useInput((value) => value.length !== 0);
  const addres = useInput((value) => value.length !== 0);

  const inputsValuesValid =
    municipality.isValueValid &&
    squareFootage.isValueValid &&
    addres.isValueValid;

  const municipalityClasses = municipality.isInputInvalid ? "invalid" : "";
  const squareFootageClasses = squareFootage.isInputInvalid ? "invalid" : "";
  const addreslasses = addres.isInputInvalid ? "invalid" : "";

  return (
    <section className="slide" id="third">
      <h1 className="slide-heading">Enter Real Estate data</h1>
      <input
        className={municipalityClasses}
        onChange={municipality.inputOnChange}
        onBlur={municipality.inputOnBlur}
        type="number"
        placeholder="Enter municipality number"
      />
      <input
        className={squareFootageClasses}
        onChange={squareFootage.inputOnChange}
        onBlur={squareFootage.inputOnBlur}
        type="text"
        placeholder="Enter square footage"
      />
      <input className={addreslasses} type="text" placeholder="Enter addres" 
              onChange={addres.inputOnChange}
              onBlur={addres.inputOnBlur}/>
      <button
        onClick={(event) => {
          event.preventDefault();

          if (!inputsValuesValid) return

          dispatch(setRealEstate(new RealEstate(1, +municipality.value, +squareFootage.value, addres.value)))

          dispatch(nextStep(1))
          navigate("/check-data");
        }}
      >
        {!inputsValuesValid ? "Enter Real Estate data" : "Next"}
      </button>
    </section>
  );
};

export default RealEstateForm;
