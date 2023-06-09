import { CircularProgress, Table } from "@mui/material";
import { Lazy } from "../components/lazy";
import styles from "./index.module.css";

function Example1() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <div key={i} className={styles.container}>
          <Lazy loader={<CircularProgress />}>
            <Table />
          </Lazy>
        </div>
      ))}
    </>
  );
}

export default Example1;
