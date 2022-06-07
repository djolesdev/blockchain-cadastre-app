import "../Form.css";
import { useNavigate } from "react-router-dom";
import {
  useAppDispatch,
} from "../../../store/redux-hooks/hooks";
import { nextStep } from "../../../store/form-slice";
import useInput from "../../hooks/useInput";
import { setUser } from "../../../store/user-slice";
import { User } from "../../../blockchain/models/User";

const UserForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const name = useInput((value) => value.length >= 2);
  const surname = useInput((value) => value.length >= 2);
  const JMBG = useInput((value) => value.length >= 5);

  const inputsValuesValid =
    name.isValueValid && surname.isValueValid && JMBG.isValueValid;


  return (
    <section className="slide" id="second">
      <h1 className="slide-heading">Enter Persons data</h1>
      <input
        className= "input"
        type="text"
        placeholder="Enter persons name"
        onChange={name.inputOnChange}
        onBlur={name.inputOnBlur}
      />
      <input
        className= "input"
        type="text"
        placeholder="Enter persons surname"
        onChange={surname.inputOnChange}
        onBlur={surname.inputOnBlur}
      />
      <input
        className= "input"
        type="text"
        placeholder="Enter persons JMBG"
        onChange={JMBG.inputOnChange}
        onBlur={JMBG.inputOnBlur}
      />
      <button
      className="btn"
      disabled = {!inputsValuesValid}
        onClick={(event) => {
          event.preventDefault();

          if(!inputsValuesValid) return

          dispatch(setUser(new User(1, name.value, surname.value, JMBG.value)))

          dispatch(nextStep(1));
          navigate("/second-step");
        }}
      >
        {!inputsValuesValid ? "Enter user data" : "Next"}
      </button>
    </section>
  );
};

export default UserForm;
