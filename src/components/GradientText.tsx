import { ReactNode } from "react";
import styles from "./component.module.css";

interface GradientTextProps {
  children: ReactNode;
}

// React component
export default function GradientText({ children }: GradientTextProps) {
  return <span className={styles.gradient_text}>{children}</span>;
}
