import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return(
    <div className="home">
      <h1>Welcome to my app!</h1>
      <p>This is a sample React app that you can use as a starting point for building your own app.</p>
      <h2>Here are some of the features you can add:</h2>
      <ul>
        <li>More pages with different content and functionality</li>
        <li>Forms for user input and data submission</li>
        <li>Integration with external APIs for dynamic content</li>
        <li>Authentication and authorization for protected routes</li>
      </ul>
      <p>To get started, check out the <Link to="/">Home</Link></p>
      <p>To see our Posts, check out the <Link to="/posts">Posts</Link></p>

    </div>
  )
}

export default Home;