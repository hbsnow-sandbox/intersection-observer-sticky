import { Table } from "../components/table";
import styles from "./index.module.css";

function Example5() {
  return (
    <>
      <div className={styles.container}>
        <Table />
      </div>
      <div className={styles.container}>
        <div className={styles.animation} />
      </div>
    </>
  );
}

export default Example5;
