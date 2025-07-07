import type React from "react";
import styles from "./Button.module.css";
import type { ReactElement } from "react";


interface IButtonProps {
  style?: {textDecoration: string, borderColor: string};
  bgColor?: 'grey' | 'black' | 'tomato';
  children: string | React.ReactElement | Array<ReactElement | string>
}

const Button = ({ style, bgColor = 'black', children }: IButtonProps) => {
  return (
    <button
      style={{ ...style, backgroundColor: bgColor }}
      className={styles.Button + " primary-color"}
    >
      {children}
    </button>
  );
};

export default Button;
