import React from "react";
import { useNavigate } from "react-router-dom";
import './UserDashboard.css';

const UserDashboard = () => {
  const navigate = useNavigate();

  const goToProfile = () => navigate("/user/profile");
  const goToMyPosts = () => navigate("/user/posts");
  const goToCreatePost = () => navigate("/user/posts/create");
  const logoutUser = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-wrapper">
      <h2 className="text-center text-primary mb-4">👋 Welcome to Your Dashboard</h2>

      <div className="dashboard-grid">
        <div className="dashboard-card" onClick={goToProfile}>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" className="dashboard-icon" />
          <h5>View Profile</h5>
        </div>

        <div className="dashboard-card" onClick={goToMyPosts}>
          <img src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="My Posts" className="dashboard-icon" />
          <h5>My Posts</h5>
        </div>

        <div className="dashboard-card" onClick={goToCreatePost}>
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png" alt="Create Post" className="dashboard-icon" />
          <h5>Create Post</h5>
        </div>

        <div className="dashboard-card" onClick={logoutUser}>
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png" alt="Logout" className="dashboard-icon" />
          <h5>Logout</h5>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
