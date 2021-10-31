import React, { useState } from "react";
import { adjectivesArr } from "./data/adjectives";
import { nounsArr } from "./data/nouns";
import EmptyBlock from "./components/EmptyBlock";
import Phrase from "./components/Phrase";
import "./App.css";

function App() {
  const [phrases, setPhrases] = useState([]);

  const handleClickGeneration = () => {
    setPhrases((prev) => [getRandomPhrase(), ...prev]);
  };

  const randomNumber = (array) => {
    const number = Math.floor(Math.random() * array.length);
    return array[number];
  };

  const getRandomPhrase = () => {
    const firstAdjective = randomNumber(adjectivesArr);
    const secondAdjective = randomNumber(adjectivesArr);
    const noun = randomNumber(nounsArr);

    return `${firstAdjective} ${secondAdjective} ${noun}`;
  };

  console.log("phrases", phrases);

  return (
    <div className="wrapper">
      {phrases.length !== 0 ? <Phrase phrases={phrases} /> : <EmptyBlock />}
      <div className="btns">
        <button className="btn btn_generate" onClick={handleClickGeneration}>
          Сгенерировать
        </button>
        <button className="btn btn_clear" onClick={() => setPhrases([])}>
          Очистить
        </button>
      </div>
    </div>
  );
}

export default App;
