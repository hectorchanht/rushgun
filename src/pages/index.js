import React from 'react';
import AddPost from '../components/AddPost';
import Layout from '../components/layout/Layout';
import PostList from '../components/PostList';


export default function Home() {
  return <Layout>
    <AddPost />
    <br/>
    <PostList />
  </Layout>
}
