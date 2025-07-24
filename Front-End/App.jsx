import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './Pages/UserDashboard';
import Privateroute from './Components/Privateroute';
import Post from './Pages/Post';
import MyPosts from './Pages/MyPosts';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      
      <Route path="/user" element={<Privateroute />}>
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="posts/create" element={<Post />} />
        <Route path="posts" element={<MyPosts />} />
        
      </Route>

    </Routes>
    <ToastContainer />
    </>
  );
}

export default App;
