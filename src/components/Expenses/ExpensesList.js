import styles from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className={styles["expenses-list__fallback"]}>No expenses found.</h2>
    );
  }
  return (
    <ul className={styles["expenses-list"]}>
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
