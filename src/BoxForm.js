import React, { useState } from "react";

const BoxForm = ({ addBox }) => {
  const INITIAL_VALUES = {
    backgroundColor: "",
    heigth: "",
    width: "",
  };

  const [data, setData] = useState(INITIAL_VALUES);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...data });
    setData(INITIAL_VALUES);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="backgroundColor">Background Color</label>
        <input
          type="text"
          id="backgroundColor"
          value={data.backgroundColor}
          placeholder="Background Color"
          name="backgroundColor"
          onChange={handleChange}
        />

        <label htmlFor="width">Width</label>
        <input
          type="text"
          id="width"
          value={data.width}
          placeholder="Width"
          name="width"
          onChange={handleChange}
        />

        <label htmlFor="heigth">Heigth</label>
        <input
          type="text"
          id="heigth"
          value={data.heigth}
          placeholder="Heigth"
          name="heigth"
          onChange={handleChange}
        />
        <p>Color: {data.backgroundColor}</p>
        <p>Heigth: {data.heigth}px</p>
        <p>Width: {data.width}px</p>
        <button>Add Box!</button>
      </form>
    </div>
  );
};

export default BoxForm;
