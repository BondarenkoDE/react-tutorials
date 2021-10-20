import React from "react";

const EmptyBlock = () => {
  return (
    <div className="block empty-block">
      <img
        src="https://pngimg.com/uploads/ghost/ghost_PNG81.png"
        width="50px"
        alt="Ghost"
      />
      <h2>Список фраз пустой</h2>
      <p>
        Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку
        “Сгенерировать”
      </p>
    </div>
  );
};

export default EmptyBlock;
