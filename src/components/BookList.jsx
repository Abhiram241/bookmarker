// import React from "react";
// import { Trash2 } from "lucide-react";

// export default function BookList({ books, onDelete }) {
//   if (books.length === 0)
//     return <p className="text-gray-400">No books added yet.</p>;

//   return (
//     <ul className="space-y-4">
//       {books.map((book, index) => (
//         <li
//           key={index}
//           className="flex justify-between items-center bg-gray-800 border border-gray-700 p-4 rounded-lg shadow-sm hover:shadow-lg transition"
//         >
//           <div>
//             <p className="text-lg font-semibold">{book.title}</p>
//             <p className="text-sm text-gray-400">by {book.author}</p>
//           </div>
//           <button
//             onClick={() => onDelete(index)}
//             className="text-red-400 hover:text-red-500 transition"
//             title="Delete Book"
//           >
//             <Trash2 size={20} />
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }
