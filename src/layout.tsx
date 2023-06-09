import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <nav>
        <ol>
          <li>
            <Link to="/example-01">
              IntersectionObserver + CircularProgress + sticky
            </Link>
          </li>
          <li>
            <Link to="/example-02">
              IntersectionObserver + LinearProgress + sticky
            </Link>
          </li>
          <li>
            <Link to="/example-03">CircularProgress + sticky</Link>
          </li>
        </ol>
      </nav>
      <Outlet />
    </div>
  );
}
