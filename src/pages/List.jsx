import React, { useEffect, useState } from 'react';
import './List.css'; // You can define CSS styles as before

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch post list
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 20))) // limit to 20 items
      .catch((err) => console.error(err));
  }, []);

  // Fetch single post details
  const handleCardClick = (postId) => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="listbox">
      <h1>Post List</h1>
      <div className="list-grid">
        {posts.map((post) => (
          <div
            key={post.id}
            className="list-card"
            onClick={() => handleCardClick(post.id)}
          >
            <h2 className="card-title">{post.title}</h2>
            <p className="card-body">{post.body.slice(0, 100)}...</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <h2>{selectedPost.title}</h2>
                <p>{selectedPost.body}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
