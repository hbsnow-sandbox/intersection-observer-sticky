import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

type Props = {
  loader: ReactNode;
};

export function Table({ loader }: Props) {
  const [isShow, setShow] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (containerRef.current) {
            obs.unobserve(containerRef.current);
          }
        } else {
          setShow(false);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!isShow) {
    return (
      <div className={styles.loading} ref={containerRef}>
        {loader}
      </div>
    );
  }

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
