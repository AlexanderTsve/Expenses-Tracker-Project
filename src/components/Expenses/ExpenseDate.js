import styles from "./ExpenseDate.module.css";
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("default", {
    month: "long",
  });
  const date = props.date.getDate();
  const year = props.date.getFullYear();
  return (
    <div className={styles["expense-date"]}>
      <div className={styles["expense-date__month"]}>{month}</div>
      <div className={styles["expense-date__year"]}>{year}</div>
      <div className={styles["expense-date__day"]}>{date}</div>
    </div>
  );
};

export default ExpenseDate;
