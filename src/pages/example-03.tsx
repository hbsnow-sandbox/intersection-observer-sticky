import { CircularProgress, Table } from "@mui/material";
import styles from "./index.module.css";

function Example3() {
  return (
    <>
      <div className={styles.container}>
        <Table />
      </div>
      <div className={styles.container}>
        <CircularProgress />
      </div>
    </>
  );
}

export default Example3;
