import React, { useEffect, useState } from 'react';
import { getPostsByUser, deletePost } from '../Services/Post-service';
import { useNavigate } from 'react-router-dom';

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("userData"));
  const userId = user?.id;

  useEffect(() => {
    if (userId) {
      loadUserPosts();
    }
  }, [userId]);

  const loadUserPosts = () => {
    getPostsByUser(userId)
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("❌ Error loading user's posts", err);
        setLoading(false);
      });
  };

  const handleDelete = (postId) => {
    console.log("🪵 Deleting post with ID:", postId);

    if (!postId) {
      alert("Post ID is missing!");
      return;
    }

    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      deletePost(postId)
        .then(() => {
          alert("✅ Post deleted successfully");
          loadUserPosts(); // Reload posts
        })
        .catch(err => {
          console.error("❌ Error deleting post:", err);
          alert("❌ Failed to delete post");
        });
    }
  };

  if (loading) return <h3>Loading posts...</h3>;

  return (
    <div className="container mt-4">
      <h2>📝 My Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map(post => {
          console.log("🔍 Post Object:", post); // Log post data

          return (
            <div key={post.id} className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <p><strong>Category:</strong> {post.category?.categoryTitle}</p>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(post.postId)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MyPosts;
