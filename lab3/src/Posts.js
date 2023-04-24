import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from './redux/action';
import './App.css';

function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const searchTerm = useSelector((state) => state.searchTerm);
  const [colorMap, setColorMap] = useState({});

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleColorChange = (id) => {
    const colors = ['red', 'yellow', 'black', 'brown', 'green'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];
    setColorMap((prevColorMap) => ({ ...prevColorMap, [id]: color }));
  };

  return (
    <div className="posts">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
        placeholder="Search posts"
      />
    <ul className="post-list">
  {filteredPosts.length > 0 ? (
    filteredPosts.map((post) => (
      <li key={post.id} className="post-item">
        <div className="post-card">
          <h2 className="post-title" style={{ color: colorMap[post.id] }}>{post.title}</h2>
          <p className="post-body">{post.body}</p>
        </div>
        <button onClick={() => handleColorChange(post.id)} className="post-button">
          Change Color
        </button>
      </li>
    ))
  ) : (
    <p className="no-results-message">No Matching Data</p>
  )}
</ul>
    </div>
  );
}

export default Posts;