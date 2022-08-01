import React from 'react';
import gun from '../libs/gun';


const PostList = () => {
  const [allPosts, setAllPosts] = React.useState([]);
  React.useEffect(() => {
    gun.get('data').map().on(d => {
      console.log('ddd', d)
      setAllPosts(allPosts => [...allPosts, d])
    })
  }, []);
console.log(` PostList.jsx --- allPosts:`, allPosts)

  return (
    <div>
      {allPosts.reverse().map((d, i) => <div key={i}>{d}</div>)}
      <h1>Post List</h1>
    </div>
  );
}

export default PostList;