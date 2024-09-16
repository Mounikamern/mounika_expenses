import React from "react"

const Expenses = (props: any) => {
  const expensesList  = props;
 

  return (
   {
    expensesList.map((each:any)=><p>{each.description}</p>)
   }
  );
};

export default Expenses;
