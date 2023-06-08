import { Table } from "./components/Table";
import styles from "./index.module.css";

function App() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <div key={i} className={styles.container}>
          <Table />
        </div>
      ))}
    </>
  );
}

export default App;
