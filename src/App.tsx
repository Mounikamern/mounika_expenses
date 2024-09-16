import "./styles.css";
import { useState } from "react";
import Expenses from "./expenses";

export default function App() {
  const [showExpenses, setShowExpenses] = useState(false);
  const [expensesList, setExpensesList] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [showDescriptionErrMsg, setShowDescriptionErrMsg] = useState(false);
  const [showDateErrMsg, setShowDateErrMsg] = useState(false);
  const [showAmountErrMsg, setShowAmountErrMsg] = useState(false);

  const showExpensesTable = () => {
    setShowExpenses(true);
    const newexpense = [amount, description, date];
    // setExpensesList(newexpense, [...expensesList]);
    // const newExpense={amount:{amount}, description:{description}, date:{date}}
    setExpensesList(newexpense);
  };

  return (
    <div className="App" onSubmit={showExpensesTable}>
      <form className="form-controls">
        <label>Description</label>
        <input
          type="text"
          onChange={(e) => [
            setDescription(e.target.value),
            setShowDescriptionErrMsg(false),
          ]}
          onBlur={() =>
            description === ""
              ? setShowDescriptionErrMsg(true)
              : setShowDescriptionErrMsg(false)
          }
          value={description}
        />
        {showDescriptionErrMsg && (
          <p className="error">Please enter description</p>
        )}

        <label>Amount</label>
        <input
          type="number"
          onChange={(e) => [
            setAmount(e.target.value),
            setShowAmountErrMsg(false),
          ]}
          onBlur={() => (amount === 0 ? setShowAmountErrMsg(true) : "")}
          value={amount}
        />
        {showAmountErrMsg && <p className="error">Please enter amount</p>}
        <label>Date</label>

        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          onBlur={() => (amount === 0 ? setShowDateErrMsg(true) : "")}
          value={date}
        />
        {showDateErrMsg && <p className="error">Please enter date</p>}
        <button type="submit">Submit</button>
      </form>
      {expensesList.map((each) => {
        <>
          <p>{each.description}</p>
          <p>{each.amount}</p>
          <p>{each.date}</p>
        </>;
      })}
    </div>
  );
}
