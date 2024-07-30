// src/App.js
import React, { useState } from "react";
import "./App.css";

const DropdownExample = () => {
  const [firstDropdownValue, setFirstDropdownValue] = useState("");
  const [secondDropdownValue, setSecondDropdownValue] = useState("");

  const handleFirstDropdownChange = (event) => {
    setFirstDropdownValue(event.target.value);
  };

  const handleSecondDropdownChange = (event) => {
    setSecondDropdownValue(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <div className="select-items">
        <div className="dropdown">
          <label htmlFor="firstDropdown">Domain:</label>
          <select
            id="firstDropdown"
            value={firstDropdownValue}
            onChange={handleFirstDropdownChange}
          >
            <option value="">SELECT</option>
            <option value="All Domains">All Domains</option>
            <option value="Banking">Banking</option>
            <option value="Energy and Utilities">Energy and Utilities</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Hi-Tech">Hi-Tech</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Incurance">Incurance</option>
            <option value="Life Science">Life Science</option>
          </select>
        </div>

        <div className="dropdown">
          <label htmlFor="secondDropdown">Info Type:</label>
          <select
            id="secondDropdown"
            value={secondDropdownValue}
            onChange={handleSecondDropdownChange}
          >
            <option value="">SELECT</option>
            <option value="WhitePaper">WhitePaper</option>
            <option value="Case Study">Case Study</option>
          </select>
        </div>
      </div>

      <div className="result">
        <p>
          You have selected Domain as: {firstDropdownValue} and Info Type as:{" "}
          {secondDropdownValue}
        </p>
      </div>
    </div>
  );
};

export default DropdownExample;
