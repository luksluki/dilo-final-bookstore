import React, { useState } from "react";

const Search = props => {
  const [search, setSearch] = useState("");
  const handleSearch = e => {
    setSearch(e.target.value);
    props.onSearch(search);
  };

  return (
    <input
      placeholder="Search ..."
      value={search}
      onChange={e => handleSearch(e)}
    />
  );
};

export default Search;
