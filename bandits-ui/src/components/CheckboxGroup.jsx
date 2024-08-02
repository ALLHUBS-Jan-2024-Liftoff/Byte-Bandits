// CheckboxGroup.js
import React from 'react';

const CheckboxGroup = ({ title, options, checkedItems, onChange }) => {
  const handleChange = (event) => {
    const { name, checked } = event.target;
    onChange(name, checked);
  };

  return (
    <>
      <label>{title}</label>
      {options.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              name={option}
              checked={checkedItems[option]}
              onChange={handleChange}
            />
            {option}
          </label>
        </div>
      ))}
    </>
  );
};

export default CheckboxGroup;
