import React, { useEffect } from "react";
import styles from "./style.module.css";

const Form = (props) => {
  let title = "";
  let description = "";

  const setText = (event) => {
    if (event.target.placeholder === "title") {
      title = event.target.value;
    } else {
      description = event.target.value;
    }
  };

  const submitForm = (event) => {
    if (event.key === "Enter") {
      props.addItem(title, description);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", submitForm);
    return () => {
      window.removeEventListener("keydown", submitForm);
    };
  });

  return (
    props.showForm && (
      <div className={styles.form}>
        <input
          type="text"
          placeholder="title"
          className={styles.title}
          onChange={setText}
        />
        <textarea
          type="text"
          placeholder="description"
          className={styles.textarea}
          onChange={setText}
        ></textarea>
      </div>
    )
  );
};

export default Form;
