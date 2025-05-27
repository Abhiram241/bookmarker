import React, { useState, useEffect } from "react";

export default function App() {
  const [books, setBooks] = useState(() => {
    const stored = localStorage.getItem("books");
    return stored ? JSON.parse(stored) : [];
  });

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

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
    <div className="min-h-screen bg-gradient-to-br from-[#1f0036] via-[#30004f] to-[#12001c] text-purple-100 flex flex-col justify-between font-sans">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-800 py-4 px-6 shadow-md shadow-indigo-700/30">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white tracking-wider animate-pulse">
          ✨ BookNest ✨
        </h1>
        <p className="text-center text-sm md:text-base text-purple-200 mt-1 italic">
          Keep track of your books
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl bg-[#240038] border border-purple-700 rounded-2xl p-6 shadow-[0_0_30px_#7c3aedaa] backdrop-blur-md">
          {/* Form */}
          <div className="flex flex-col gap-4 mb-6">
            <input
              type="text"
              placeholder="📖 Book Title"
              className="bg-[#3a005f] text-purple-100 placeholder-purple-400 border border-purple-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="✍️ Author Name"
              className="bg-[#3a005f] text-purple-100 placeholder-purple-400 border border-purple-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <button
              onClick={addBook}
              className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-3 rounded-lg font-bold tracking-wide hover:brightness-110 transition shadow-lg hover:shadow-indigo-400"
            >
              ➕ Add Book
            </button>
          </div>

          {/* Book List */}
          <div className="space-y-4">
            {books.length === 0 ? (
              <p className="text-purple-300 text-center italic">
                No books added yet. ✨
              </p>
            ) : (
              books.map((book) => (
                <div
                  key={book.id}
                  className="flex justify-between items-center bg-[#32004a] border border-purple-800 p-4 rounded-xl shadow-md hover:shadow-indigo-500/40 transition-all"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-purple-200">
                      {book.title}
                    </h3>
                    <p className="text-sm text-purple-400 italic">
                      by {book.author}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteBook(book.id)}
                    className="text-blue-400 hover:text-blue-500 text-xl font-bold transition"
                    title="Delete Book"
                  >
                    ❌
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-gradient-to-r from-indigo-800 to-purple-800 text-white text-sm mt-8 shadow-inner shadow-indigo-700/30">
        BookNest@2025 - Bookmarker v1.0
      </footer>
    </div>
  );
}
