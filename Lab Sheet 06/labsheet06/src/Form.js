import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You entered: ${inputValue}`);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
