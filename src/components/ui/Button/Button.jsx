import styles from "./Button.module.css";

const Button = ({bgColor = "tomato"}) => {
  return (
    <button 
    style={{backgroundColor: bgColor}}
    className={styles.Button}
    >
      My Button
    </button>
  );
};

export default Button;
