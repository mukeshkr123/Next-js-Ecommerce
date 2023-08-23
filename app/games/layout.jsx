import React from "react";

const GameLayout = ({ children }) => {
  return (
    <div className="border">
      <header>Game heading</header>
      {children}
    </div>
  );
};

export default GameLayout;
