import React, { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState(() => {
    const stored = localStorage.getItem("books");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleAdd = (book) => {
    setBooks((prev) => [...prev, book]);
  };

  const handleDelete = (index) => {
    setBooks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 font-sans">
      <div className="max-w-2xl mx-auto shadow-lg bg-gray-950/60 backdrop-blur-md rounded-xl p-6 border border-gray-700">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
          📚 My Book Collection
        </h1>
        <BookForm onAdd={handleAdd} />
        <BookList books={books} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
