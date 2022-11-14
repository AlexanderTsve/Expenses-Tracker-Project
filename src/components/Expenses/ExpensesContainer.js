import "./ExpensesContainer.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpensesContainer = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const changeYear = (year) => {
    setFilteredYear(year);
  };
  const filteredYearArr = props.expenses.filter(
    (expense) => String(expense.date.getFullYear()) === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        setSelectedYear={filteredYear}
        onChangeYear={changeYear}
      />
      <ExpensesChart expenses={filteredYearArr} />
      <ExpensesList items={filteredYearArr} />
    </Card>
  );
};

export default ExpensesContainer;
