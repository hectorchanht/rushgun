import { Box, Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <Container maxW={'888px'} display={'flex'}
      flexDirection={'column'} height={'100vh'}>
      <Head>
        <title>rushbin-clipboard</title>
        <meta name="description" content="🤑Your private clipboard on cloud for FREE 🤑" />
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