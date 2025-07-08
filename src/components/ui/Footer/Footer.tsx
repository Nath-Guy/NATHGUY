import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {

  return (
    <div className={styles.Footer} data-testid="Footer">
      Mon footer d'application
    </div>
  );
};

export default Footer;
