import React from "react";
import { useEffect, useState } from "react";
import styles from "./Button.module.css";

// interface de propriétés du composant Button
interface IButtonProps {
  style?: { textDecoration: string };
  bgColor?: "grey" | "black" | "tomato";
  children: string | React.ReactElement | Array<React.ReactElement | string>;
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
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 350);
    }
  }, [clicked]);

  return (
    <button
      style={{ ...style, backgroundColor: bgColor }}
      className={
        styles.Button +
        " primary-color" +
        (clicked ? ' ' + styles.clicked : '')
      }
      type={type}
      onClick={(evt) => {
        setClicked(true);
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
