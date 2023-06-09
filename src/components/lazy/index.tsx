import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./index.module.css";

type Props = PropsWithChildren<{
  loader: ReactNode;
}>;

export function Lazy({ loader, children }: Props) {
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

  return children;
}
