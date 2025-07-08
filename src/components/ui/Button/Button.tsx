import type React from "react";
import type { ReactElement } from "react";
import styles from "./Button.module.css";

// interface de propriétés du composant Button
interface IButtonProps {
  style?: { textDecoration: string };
  bgColor?: "grey" | "black" | "tomato";
  children: string | React.ReactElement | Array<ReactElement | string>;
  type?: "submit" | "reset" | "button";
}

const Button = ({
  style,
  bgColor = "black",
  children,
  type = "button",
}: IButtonProps) => {
  return (
    <button
      style={{ ...style, backgroundColor: bgColor }}
      className={styles.Button + " primary-color"}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
