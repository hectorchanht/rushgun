import { Box, Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <Container maxW={'888px'} display={'flex'} flexDirection={'column'} height={'100vh'}>
      <Head>
        <title>rushgun-clipboard</title>
        <meta name="description" content="🔫faster than before, the decentralized clipboard with Gun.js🔫" />
        <link rel="icon" href="/hating-cat.jpg" />
      </Head>
      <Header />
      <Box as={'main'} flex={1}>
        {children}
      </Box>
      <Footer />
    </Container>
  )
}

export default Layout;