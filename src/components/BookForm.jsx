// import React, { useState } from "react";
// import { Plus } from "lucide-react";

// export default function BookForm({ onAdd }) {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title || !author) return;
//     onAdd({ title, author });
//     setTitle("");
//     setAuthor("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 mb-6">
//       <input
//         className="bg-gray-800 text-white border border-gray-600 p-3 rounded-lg w-full"
//         placeholder="Book Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         className="bg-gray-800 text-white border border-gray-600 p-3 rounded-lg w-full"
//         placeholder="Author Name"
//         value={author}
//         onChange={(e) => setAuthor(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition"
//       >
//         <Plus size={18} />
//         Add
//       </button>
//     </form>
//   );
// }
