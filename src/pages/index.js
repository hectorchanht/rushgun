import React from 'react';
import AddPost from '../components/AddPost';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import gun from '../libs/gun';


export default function Home() {

  const user = gun.user();
  // React.useEffect(() => {
  //   user.create('abbabb', '1234qwer', ({ err, ok, pub, ...d }) => {
  //     // console.log(` abbabb- d:`, d)

  //   })
  //   // user.auth('a', '1234qwer1', (d) => {
  //   //   // // console.log(` index.js --- dd:`, d)
  //   // })
  //   // // // console.log(` index.js --- user.is:`, user.is)

  //   // // user.leave();
  //   // // console.log(` index.js --- user.is:`, user.is)

  //   // user.get('data').once(data => {
  //   //   // console.log(` index.js --- data:`, data)
  //   // })
  //   // // gun.get('data').put({ hello2: "world2" }, function (ack) {
  //   // //   // console.log(` index.js --- ack:`, ack)
  //   // // })
  //   // // gun.set('data').put({ hi: null }).on(data => {
  //   // //   // console.log(` index.js --- data:`, data)
  //   // // });

  //   // console.log(` index.js --- user:`, user.is)

  // }, [user.is]);

  React.useEffect(() => {
    const publicData = gun.get('public');

    // gun.get('public').on(data => {
    //   // console.log(` index.js  public:`, data)

    // })
  }, []);

  return <Layout>
    {/* <Login /> */}
    <AddPost />
    <PostList />
  </Layout>
}
