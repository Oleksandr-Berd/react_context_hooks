import React, { createContext, useState } from "react";
import { nanoid } from "nanoid";
export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "Name of the wind", author: "Patrick Rothfuss", id: 1 },
    { title: "The final empire", author: "Brandon Sanderson", id: 2 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: nanoid() }]);
  };

  const removeBook = (id) => {
    const newBooksData = books.filter((el) => el.id !== id);
    setBooks(newBooksData);
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
