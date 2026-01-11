import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import Profile from "./components/accounts/Profile";
import UpdateProfile from "./components/accounts/UpdateProfile";

import WithPrivateRoute from "./utils/WithPrivateRoute";
import ChatLayout from "./components/layouts/ChatLayout";
import Header from "./components/layouts/Header";
import ErrorMessage from "./components/layouts/ErrorMessage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <ErrorMessage />

        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* PROFILE VIEW (WhatsApp style) */}
          <Route
            path="/profile"
            element={
              <WithPrivateRoute>
                <Profile />
              </WithPrivateRoute>
            }
          />

          {/* PROFILE EDIT (Update Profile screen) */}
          <Route
            path="/profile/edit"
            element={
              <WithPrivateRoute>
                <UpdateProfile />
              </WithPrivateRoute>
            }
          />

          {/* CHAT HOME */}
          <Route
            path="/"
            element={
              <WithPrivateRoute>
                <ChatLayout />
              </WithPrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// import { AuthProvider } from "./contexts/AuthContext";

// import Register from "./components/accounts/Register";
// import Login from "./components/accounts/Login";
// import Profile from "./components/accounts/Profile";
// import UpdateProfile from "./components/accounts/UpdateProfile";

// import WithPrivateRoute from "./utils/WithPrivateRoute";
// import ChatLayout from "./components/layouts/ChatLayout";
// import Header from "./components/layouts/Header";
// import ErrorMessage from "./components/layouts/ErrorMessage";

// function App() {
//   const [darkMode, setDarkMode] = useState(true); // default dark venumna true

//   return (
//     <AuthProvider>
//       {/* 🔥 ROOT WRAPPER */}
//       <div className={darkMode ? "dark" : ""}>
//         <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
//           <Router>
//             {/* Header ku toggle pass pannu */}
//             <Header darkMode={darkMode} setDarkMode={setDarkMode} />
//             <ErrorMessage />

//             <Routes>
//               <Route path="/register" element={<Register />} />
//               <Route path="/login" element={<Login />} />

//               <Route
//                 path="/profile"
//                 element={
//                   <WithPrivateRoute>
//                     <Profile />
//                   </WithPrivateRoute>
//                 }
//               />

//               <Route
//                 path="/profile/edit"
//                 element={
//                   <WithPrivateRoute>
//                     <UpdateProfile />
//                   </WithPrivateRoute>
//                 }
//               />

//               <Route
//                 path="/"
//                 element={
//                   <WithPrivateRoute>
//                     <ChatLayout />
//                   </WithPrivateRoute>
//                 }
//               />
//             </Routes>
//           </Router>
//         </div>
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;
