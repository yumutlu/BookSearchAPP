import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  /* func */
  const handleSearch = async (e) => {
    e.preventDefault();
    const url = `http://localhost:3001/books/${searchTerm}`;
    const response = await axios.get(url);
    setBooks(response.data);
    setSearchTerm("");
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search books"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="book-container">
        {books.map((book, index) => (
          <Card key={index} book={book} />
        ))}
      </div>
    </div>
  );
};
export default Search;
