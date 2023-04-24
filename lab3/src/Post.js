import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedPost } from './redux/action';
import './post.css'

function Post() {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    state.posts.find((post) => post.id === Number(useParams().id))
  );

  dispatch(setSelectedPost(post));

  return (
    <div className="post-container">
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Post not found!</p>
      )}
    </div>
  );
}

export default Post;