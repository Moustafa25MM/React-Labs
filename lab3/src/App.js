import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchPosts } from './redux/action';
import Home from './Home';
import Posts from './Posts';
import Post from './Post';
import Navbar from './Navbar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;