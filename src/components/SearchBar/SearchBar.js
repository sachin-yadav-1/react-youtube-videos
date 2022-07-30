import React, { useEffect, useState } from "react";
import "./searchBar.css";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm.length) {
      const timer = setTimeout(() => {
        props.onFormSubmit(searchTerm);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchTerm]);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.length) {
      props.onFormSubmit(searchTerm);
    }
    setSearchTerm("");
  };

  return (
    <div className="search-bar">
      <form onSubmit={onFormSubmit} className="search-bar__form">
        <input value={searchTerm} onChange={onInputChange} type="search" className="search-bar__input" placeholder="Search videos..." />
      </form>
    </div>
  );
};

export default SearchBar;
