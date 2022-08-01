import React from 'react';
import AddPost from '../components/AddPost';
import Layout from '../components/layout/Layout';
import PostList from '../components/PostList';


export default function Home() {
  React.useEffect(() => {
    fetch('http://localhost:3000/api')
    .then(d => d.json())
    .then(d => console.log(d))
  }, []);
  
  return <Layout>
    <AddPost />
    <br/>
    <PostList />
  </Layout>
}
