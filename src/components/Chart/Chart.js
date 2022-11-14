import styles from "./Chart.module.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valuesArr = props.dataPoints.map((exp) => exp.value);
  const totalMax = Math.max(...valuesArr);
  return (
    <div className={styles.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
