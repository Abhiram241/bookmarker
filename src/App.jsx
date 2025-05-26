import React, { useState, useEffect } from "react";

export default function App() {
  const [books, setBooks] = useState(() => {
    const stored = localStorage.getItem("books");
    return stored ? JSON.parse(stored) : [];
  });

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // Save books to localStorage on change
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = () => {
    if (title.trim() === "" || author.trim() === "") return;

    setBooks((prev) => [
      ...prev,
      { id: Date.now(), title: title.trim(), author: author.trim() },
    ]);
    setTitle("");
    setAuthor("");
  };

  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">my book collection!!</h1>

      <div className="mb-6 w-full max-w-md bg-gray-800 p-4 rounded-md shadow-md">
        <input
          type="text"
          placeholder="Book Title"
          className="w-full mb-3 p-2 rounded bg-gray-700 text-gray-100 focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="w-full mb-3 p-2 rounded bg-gray-700 text-gray-100 focus:outline-none"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          onClick={addBook}
          className="w-full bg-green-600 hover:bg-green-700 transition rounded py-2 font-semibold"
        >
          ➕ Add Book
        </button>
      </div>

      <div className="w-full max-w-md">
        {books.length === 0 ? (
          <p className="text-gray-400 text-center">No books added yet.</p>
        ) : (
          books.map((book) => (
            <div
              key={book.id}
              className="flex justify-between items-center bg-gray-800 p-3 mb-2 rounded shadow"
            >
              <div>
                <h3 className="font-semibold text-lg">{book.title}</h3>
                <p className="text-gray-400">{book.author}</p>
              </div>
              <button
                onClick={() => deleteBook(book.id)}
                className="text-red-500 hover:text-red-700 font-bold text-xl"
                aria-label={`Delete ${book.title}`}
                title="Delete book"
              >
                ❌
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
