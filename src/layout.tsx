import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.css";

export function Layout() {
  return (
    <div>
      <nav className={styles.nav}>
        <ol className={styles.ol}>
          <li>
            <Link to="/example-01">
              IntersectionObserver + CircularProgress + sticky
            </Link>
          </li>
          <li>
            <Link to="/example-02">IntersectionObserver + sticky</Link>
          </li>
          <li>
            <Link to="/example-03">
              IntersectionObserver + LinearProgress + sticky
            </Link>
          </li>
          <li>
            <Link to="/example-04">CircularProgress + sticky</Link>
          </li>
          <li>
            <Link to="/example-05">CSS animation + sticky</Link>
          </li>
        </ol>
      </nav>
      <Outlet />
    </div>
  );
}
