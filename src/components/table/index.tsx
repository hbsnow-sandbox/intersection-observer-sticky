import styles from "./index.module.css";

export function Table() {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th className={styles.th} scope="col">
              列1
            </th>
            <th className={styles.th} scope="col">
              列2
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(50)].map((_, i) => (
            <tr key={i}>
              <td className="td">{i}</td>
              <td className="td">{i}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
