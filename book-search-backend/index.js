const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/books/:searchTerm", async (req, res) => {
  const { searchTerm } = req.params;
  const url = `http://openlibrary.org/search.json?q=${searchTerm}`;
  const response = await axios.get(url);
  const books = response.data.docs.slice(0, 50).map((book) => ({
    title: book.title,
    author: book.author_name ? book.author_name[0] : "Unknown Author",
    cover: `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
    publish_year: book.first_publish_year || "N/A",
  }));
  res.send(books);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
