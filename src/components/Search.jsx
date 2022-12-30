import React, { useState } from "react";

import { searchUsers } from "../actions";
import { useDispatch } from "react-redux";

function Search() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchUsers(query));
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        className="w-full p-2 rounded-lg"
        type="text"
        placeholder="Search for users..."
        value={query}
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;
