import React, { useState, useEffect } from "react";
import ReviewsBlock from "./components/ReviewsBlock";
import Feedback from "./components/Feedback";

import "./App.scss";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("comments")) {
      setComments(JSON.parse(localStorage.getItem("comments")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const addComment = (comment) => {
    setComments((prev) => [...prev, comment]);
  };

  const deleteComment = (deletedEmail) => {
    const filterComments = comments.filter(
      ({ email }) => email !== deletedEmail
    );

    setComments(filterComments);
  };

  return (
    <div className="container">
      <div className="wrapper">
        {comments.length !== 0 && (
          <ReviewsBlock
            comments={comments}
            deleteComment={deleteComment}
          ></ReviewsBlock>
        )}
        <Feedback comments={comments} addComment={addComment}></Feedback>
      </div>
    </div>
  );
}

export default App;
