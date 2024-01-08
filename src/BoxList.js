import React, { useState } from "react";
import Box from "./Box";
import BoxForm from "./BoxForm";
import { v4 as uuidv4 } from "uuid";

const BoxList = () => {
  const INITIAL_VALUES = [
    {
      backgroundColor: "pink",
      width: "100",
      height: "100",
      id: uuidv4(),
      key: uuidv4(),
    },
    {
      backgroundColor: "olive",
      width: "35",
      height: "60",
      id: uuidv4(),
      key: uuidv4(),
    },
    {
      backgroundColor: "green",
      width: "100",
      height: "150",
      id: uuidv4(),
      key: uuidv4(),
    },
  ];
  const [boxes, setBoxes] = useState(INITIAL_VALUES);

  const addBox = (newBox) => {
    setBoxes((boxes) => [
      ...boxes,
      {
        backgroundColor: newBox.backgroundColor,
        height: newBox.heigth,
        width: newBox.width,
        id: uuidv4(),
      },
    ]);
  };
  return (
    <div>
      <h3>Boxes</h3>
      {boxes.map((b) => (
        <Box
          backgroundColor={b.backgroundColor}
          height={b.height}
          width={b.width}
          id={b.id}
          key={b.id}
        />
      ))}
      <BoxForm addBox={addBox} />
    </div>
  );
};

export default BoxList;
