import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Feedback.module.scss";

const Feedback = ({ addComment, comments }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const changeInput = (e) => {
    e.preventDefault();

    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();

    const isRepeatEmail = comments.find((comment) => comment.email === email);

    if (isRepeatEmail) {
      alert("Вы уже оставляли отзыв!");
    } else {
      addComment({ name, email, description, date: new Date().toGMTString() });
    }

    setName("");
    setEmail("");
    setDescription("");
  };

  return (
    <Paper className={styles.wrapper}>
      <div className="title">Обратная связь: </div>
      <form onSubmit={handleClickSubmit}>
        <TextField
          name="name"
          value={name}
          onChange={changeInput}
          className={styles.field}
          label="Имя"
        />
        <TextField
          name="email"
          value={email}
          onChange={changeInput}
          className={styles.field}
          label="Почта"
        />
        <TextField
          name="description"
          value={description}
          onChange={changeInput}
          className={styles.field}
          label="Текст..."
          multiline
          rows={3}
        />
        <Button type="submit" variant="contained" className={styles.button}>
          Отправить
        </Button>
      </form>
    </Paper>
  );
};

export default Feedback;
