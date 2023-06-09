import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.css";

export function Layout() {
  return (
    <div>
      <nav className={styles.nav}>
        <ol className={styles.ol}>
          <li>
            <Link to="/example-01">
              IntersectionObserver + CircularProgress + sticky (発生する)
            </Link>
          </li>
          <li>
            <Link to="/example-02">
              IntersectionObserver + sticky (発生しない)
            </Link>
          </li>
          <li>
            <Link to="/example-03">
              IntersectionObserver + LinearProgress + sticky (発生しない)
            </Link>
          </li>
          <li>
            <Link to="/example-04">CircularProgress + sticky (発生する)</Link>
          </li>
          <li>
            <Link to="/example-05">CSS animation + sticky (発生する)</Link>
          </li>
        </ol>
      </nav>
      <Outlet />
    </div>
  );
}
