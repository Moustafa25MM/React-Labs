import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Search from './Search';

function Layout({children}) {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);

  const handleSearch = query => {
    const filteredPosts = posts.filter(post => post.title.includes(query));
    setSearchResults(filteredPosts);
    setNoResults(filteredPosts.length === 0);
  };



  return (
    <div className="container">
      <h1 style={{color:'blueviolet'}}>My First App</h1>
      <Search onSearch={handleSearch} />
      {noResults ? <p className="no-results">No posts match your search.</p> : <Posts posts={searchResults.length > 0 ? searchResults : posts} />}
    </div>
  );
}
export default Layout;
