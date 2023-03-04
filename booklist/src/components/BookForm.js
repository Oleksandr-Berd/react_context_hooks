import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
        required
      />
      <input
        type="text"
        placeholder="book author"
        value={author}
        onChange={(evt) => setAuthor(evt.target.value)}
        required
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default NewBookForm;
