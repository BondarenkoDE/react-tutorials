import React from "react";
import styles from "./Review.module.scss";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";

const Review = ({ name, description, email, deleteComment }) => {
  const handleClickDeleteReview = (email) => {
    deleteComment(email);
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={description} />
      <DeleteIcon
        className={styles.delete}
        onClick={() => handleClickDeleteReview(email)}
      />
    </ListItem>
  );
};

export default Review;
