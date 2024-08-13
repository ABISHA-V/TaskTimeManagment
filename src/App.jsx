// import React, { useContext } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";

// import "./index.css";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Completed from "./pages/Completed";
// import Incomplete from "./pages/Incomplete";
// import AllTasks from "./pages/AllTasks";
// import { AuthContext } from "./context/AuthContext";
// import { TaskContextProvider } from "./context/TaskContext";
// import Profile from "./pages/Profile";
// import GetStarted from "./pages/GetStarted";
// import AdminLogin from "./pages/AdminLogin";
// import AdminDashboard from "./components/AdminDashboard";
// import UserDashboard from "./components/UserDashboard";

// const App = () => {
//   // Get the user context
//   const { user } = useContext(AuthContext);

//   return (
//     <TaskContextProvider>
//       <Routes>
//         <Route path="/" element={<GetStarted />} />
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route
//           path="/admindash"
//           element={user ? <AdminDashboard /> : <Navigate to="/admin-login" />}
//         />
//         <Route
//           path="/userdash"
//           element={user ? <UserDashboard /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/home"
//           element={user ? <Dashboard /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/register"
//           element={user ? <Navigate to="/home" /> : <Register />}
//         />
//         <Route
//           path="/login"
//           element={user ? <Navigate to="/home" /> : <Login />}
//         />
//         <Route path="*" element={<Navigate to="/" />} />
//         <Route path="/all-tasks" element={user ? <AllTasks /> : <Navigate to="/login" />} />
//         <Route
//           path="/completed"
//           element={user ? <Completed /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/incomplete"
//           element={user ? <Incomplete /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/profile"
//           element={user ? <Profile /> : <Navigate to="/login" />}
//         />
//       </Routes>
//     </TaskContextProvider>
//   );
// };

// export default App;
// App.js
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./index.css";

import Login from "./pages/Login";
import Register from "./pages/Register";

import AllTasks from "./pages/AllTasks";
import { AuthContext } from "./context/AuthContext";
import { TaskContextProvider } from "./context/TaskContext";
import Profile from "./pages/Profile";
import GetStarted from "./pages/GetStarted";

import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsofService";
import TaskCreationPage from "./pages/TaskCreationPage";
import TaskDashboardPage from "./pages/TaskDashboardPage";
import CalendarPage from "./pages/CalendarPage";
import AdminLogin from "./pages/AdminLogin";
import TaskDescriptionPage from "./pages/TaskDescriptionPage";


const App = () => {
  const { user } = useContext(AuthContext);

  return (
    // <div>
    //   <UserDashboard/>
    // </div>
    <TaskContextProvider>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        
        <Route
          path="/admindash"
          element={<AdminDashboard /> }
        />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/taskd' element={<TaskDashboardPage/>}/>
        <Route path='/privacy' element={<PrivacyPolicy/>}/>
        <Route path='/terms' element={<TermsOfService/>}/>
        <Route path="/userdash" element={<UserDashboard/>}/>
        <Route path="/create" element={<TaskCreationPage/>}/>
        <Route path="/cal" element={<CalendarPage/>}/>
       
        
        <Route
          path="/register"
          element={ <Register />}
        />
        <Route path="/login" element={ <Login />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/all-tasks" element={<AllTasks />} />
       
        <Route path="/task-details/:id" element={<TaskDescriptionPage/>} />
        <Route path="/profile" element={<Profile /> } />
      </Routes>
    </TaskContextProvider>
  );
};

export default App;
