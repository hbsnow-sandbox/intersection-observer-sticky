import { Lazy } from "../components/lazy";
import { Table } from "../components/table";
import styles from "./index.module.css";

function Example2() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <div key={i} className={styles.container}>
          <Lazy loader="Loading...">
            <Table />
          </Lazy>
        </div>
      ))}
    </>
  );
}

export default Example2;
