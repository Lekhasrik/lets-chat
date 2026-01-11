// import { useNavigate } from "react-router-dom";

// export default function ProfileView({ user }) {
//   const navigate = useNavigate();

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* LEFT PANEL */}
//       <div className="w-96 bg-white p-6">
//         <img
//           src={user.photoURL}
//           className="w-32 h-32 rounded-full mx-auto"
//           alt=""
//         />

//         <div className="mt-6">
//           <p className="text-gray-500 text-sm">Name</p>
//           <div className="flex justify-between items-center">
//             <p className="text-lg">{user.displayName}</p>
            
//           </div>
//         </div>

//         <div className="mt-4">
//           <p className="text-gray-500 text-sm">Email</p>
//           <p>{user.email}</p>
//         </div>

//         <button
//           onClick={() => navigate("/profile/edit")}
//           className="mt-6 w-full bg-blue-600 text-white py-2 rounded"
//         >
//           Edit Profile
//         </button>
//       </div>

//       {/* RIGHT EMPTY AREA */}
//       <div className="flex-1 flex items-center justify-center text-gray-400 text-xl">
//         Profile
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";

export default function ProfileView({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-slate-900">
      
      {/* LEFT PANEL */}
      <div className="w-96 bg-white dark:bg-slate-800 p-6 border-r border-gray-200 dark:border-slate-700">
        
        <img
          src={user.photoURL}
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
          alt="profile"
        />

        <div className="mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
          <p className="text-lg font-medium text-gray-800 dark:text-white">
            {user.displayName}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
          <p className="text-gray-700 dark:text-gray-300">
            {user.email}
          </p>
        </div>

        <button
          onClick={() => navigate("/profile/edit")}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          Edit Profile
        </button>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex items-center justify-center
                      bg-gray-50 dark:bg-slate-900
                      text-gray-400 dark:text-gray-500 text-xl">
        Profile
      </div>
    </div>
  );
}

