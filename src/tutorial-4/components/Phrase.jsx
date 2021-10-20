import React from "react";

const Phrase = ({ phrases }) => {
  return (
    <div className="list">
      {phrases.map((phrase, i) => (
        <div key={i} className="block">
          <h3>{phrase}</h3>
        </div>
      ))}
    </div>
  );
};

export default Phrase;
