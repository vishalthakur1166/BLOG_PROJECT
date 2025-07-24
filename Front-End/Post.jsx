// src/pages/Post.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadAllCategory } from '../Services/Category-service';
import { createPost } from '../Services/Post-service';

const Post = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [post, setPost] = useState({
    title: '',
    content: '',
    category: ''
  });

  useEffect(() => {
  loadAllCategory()
    .then((data) => {
      console.log("✅ Loaded categories:", data);
      setCategories(data);
    })
    .catch((error) => {
      console.error("❌ Failed to load categories:", error);
    });
}, [])

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("userData"));
    const userId = user?.id;

    const selectedCategory = categories.find(
      cat => cat.categoryTitle === post.category
    );
    const categoryId = selectedCategory?.categoryId;

    if (!userId || !categoryId) {
      alert("❌ Invalid User or Category");
      return;
    }

    const finalPostData = {
      title: post.title,
      content: post.content,
      userId,
      categoryId
    };
        //  Backend Api Caaling ***********************************
    createPost(finalPostData)
      .then(() => {
        alert("✅ Post Created!");
        setPost({ title: '', content: '', category: '' });
      })
      .catch((error) => {
        console.error("Post creation failed:", error);
        alert("❌ Failed to create post.");
      });
  };

  const goBackToDashboard = () => {
    navigate("/user/dashboard");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center rounded-top-4">
          <h4 className="mb-0">📝 Create a New Post</h4>
          <button onClick={goBackToDashboard} className="btn btn-outline-light">🔙 Dashboard</button>
        </div>

        <div className="card-body bg-light-subtle p-4">
          <form onSubmit={handleSubmit} className="px-2">
            <div className="mb-4">
              <label className="form-label fw-semibold text-primary">📌 Title</label>
              <input
                type="text"
                name="title"
                className="form-control form-control-lg shadow-sm"
                value={post.title}
                onChange={handleChange}
                placeholder="Enter post title..."
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold text-primary">📝 Content</label>
              <textarea
                name="content"
                className="form-control shadow-sm"
                rows="6"
                value={post.content}
                onChange={handleChange}
                placeholder="Write your content here..."
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold text-primary">🏷️ Category</label>
              <select
                name="category"
                className="form-control form-control-lg shadow-sm"
                value={post.category}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Category --</option>
                {categories.map((cat) => (
                  <option key={cat.categoryId} value={cat.categoryTitle}>
                    {cat.categoryTitle}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-center">
              <button className="btn btn-success px-5 py-2 fs-5 shadow-sm" type="submit">
                🚀 Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
