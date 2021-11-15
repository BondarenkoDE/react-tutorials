import React, { useState } from "react";
import Review from "../Review";
import styles from "./ReviewsBlock.module.scss";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";

const ReviewsBlock = ({ comments, deleteComment }) => {
  return (
    <Paper className={styles.wrapper}>
      <div className="title">Отзывы:</div>
      <List className={styles.list}>
        {comments.map((comment, i) => (
          <Review
            key={comment.email}
            deleteComment={deleteComment}
            {...comment}
          />
        ))}
      </List>
    </Paper>
  );
};

export default ReviewsBlock;
