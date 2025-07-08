import type React from "react";
import type { ReactElement } from "react";
import styles from "./Button.module.css";

// interface de propriétés du composant Button
interface IButtonProps {
  style?: { textDecoration: string };
  bgColor?: "grey" | "black" | "tomato";
  children: string | React.ReactElement | Array<ReactElement | string>;
  type?: "submit" | "reset" | "button";
  onButtonClick?: Function;
}

const Button = ({
  style,
  bgColor = "black",
  children,
  type = "button",
  onButtonClick,
}: IButtonProps) => {
  return (
    <button
      style={{ ...style, backgroundColor: bgColor }}
      className={styles.Button + " primary-color"}
      type={type}
      onClick={(evt) => {
        if (undefined !== onButtonClick) {
          onButtonClick();
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
