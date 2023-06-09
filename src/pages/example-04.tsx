import { CircularProgress } from "@mui/material";
import { Table } from "../components/table";
import styles from "./index.module.css";

function Example4() {
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

export default Example4;
