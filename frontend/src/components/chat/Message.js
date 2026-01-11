import { format } from "timeago.js";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// export default function Message({ message, self }) {
//   return (
//     <>
//       <li
//         className={classNames(
//           self !== message.sender ? "justify-start" : "justify-end",
//           "flex"
//         )}
//       >
//         <div>
//           <div
//             className={classNames(
//               self !== message.sender
//                 ? "text-gray-700 dark:text-gray-400 bg-white border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700"
//                 : "bg-blue-600 dark:bg-blue-500 text-white",
//               "relative max-w-xl px-4 py-2 rounded-lg shadow"
//             )}
//           >
//             <span className="block font-normal ">{message.message}</span>
//           </div>
//           <span className="block text-sm text-gray-700 dark:text-gray-400">
//             {format(message.createdAt)}
//           </span>
//         </div>
//       </li>
//     </>
//   );
// }

export default function Message({ message, self }) {
  const isMe = self === message.sender;

  return (
    <li className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div className="max-w-md">
        <div
          className={`px-4 py-2 rounded-2xl shadow
            ${isMe
              ? "bg-blue-600 text-white rounded-br-none"
              : "bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-bl-none"
            }`}
        >
          {message.message}
        </div>
        <p className="text-xs mt-1 text-gray-400">
          {format(message.createdAt)}
        </p>
      </div>
    </li>
  );
}
