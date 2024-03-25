import React from "react";
import "./Style.css"

const Cell = ({filled, onclick}) => {
  return (
    <button
      type="button"
      onClick={onclick}
    
      className={filled?"cell cell-activated" : "cell"}

    />
  );
};

export default Cell;
