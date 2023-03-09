import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onFilterChangeHandler = (enteredDate) => {
    setFilteredYear(enteredDate);
  };

  const newFilteredExpenses = props.items.filter((expenes) => {
    return expenes.date.getFullYear() === +filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={onFilterChangeHandler}
        />
        <ExpensesChart expenses={newFilteredExpenses}></ExpensesChart>
        <ExpensesList items={newFilteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
