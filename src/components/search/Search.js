import React from "react";

const Search = ({ type = "search", name, placeholder = "", className, setSearchInput }) => {
  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`input ${className}`}
      onChange={handleOnChange}
    />
  );
};

export default Search;
