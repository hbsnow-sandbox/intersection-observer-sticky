import { LinearProgress } from "@mui/material";
import { Table } from "../components/Table";
import styles from "./index.module.css";

export function Example2() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <div key={i} className={styles.container}>
          <Table loader={<LinearProgress />} />
        </div>
      ))}
    </>
  );
}
