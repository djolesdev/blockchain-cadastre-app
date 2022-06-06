import React, { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../store/redux-hooks/hooks";
import { addTransactionToPool } from "../../../api/index";
import "../Form.css";
import { Transaction } from "../../../blockchain/transaction/Transaction";
import { useNavigate } from "react-router-dom";
import { addTransaction, nextStep } from "../../../store/form-slice";
import { Miner } from "../../../blockchain/miner/Miner";

const SubmitForm = () => {
  const user = useAppSelector((state) => state.user);
  const realEstate = useAppSelector((state) => state.realEstate);
  const transactionCount = useAppSelector(
    (state) => state.form.transactionCount
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {

    return () => {
      Miner.mine()
    }

  }, [transactionCount]);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    addTransactionToPool(new Transaction(user, realEstate, new Date()));

    dispatch(addTransaction(1))

    dispatch(nextStep(-2))

    navigate('/first-step')
  };

  return (
    <form onSubmit={onSubmitHandler} className="form">
      <div className="container">
        <h2>Entered user data</h2>
        <h2>Entered Real Estate data</h2>
        <h3>
          Name: <span>{user.name}</span>
        </h3>
        <h3>
          Municipality number: <span>{realEstate.municipalityNum}</span>
        </h3>
        <h3>
          Surname: <span>{user.surname}</span>
        </h3>
        <h3>
          Square footage: <span>{realEstate.squareFootage}</span>
        </h3>
        <h3>
          JMBG: <span>{user.JMBG}</span>
        </h3>
        <h3>
          Addres: <span>{realEstate.addres}</span>
        </h3>
      </div>
      <button type="submit" className="submit-btn">
        Add to Blockchain
      </button>
    </form>
  );
};

export default SubmitForm;
