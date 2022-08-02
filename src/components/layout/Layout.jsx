import { Box, Container } from "@chakra-ui/react";
import { useAtom } from "jotai";
import Head from 'next/head';
import { alertMsgAtom } from "../../libs/jotaiAtoms";
import AlertMsg from "../AlertMsg";
import Footer from "./Footer";
import Header from "./Header";


const Layout = ({ children }) => {
  const [alertMsg, setAlertMsg] = useAtom(alertMsgAtom);
  return (
    <Container maxW={'888px'} display={'flex'} flexDirection={'column'} height={'calc(92vh)'}>
      <Head>
        <title>rushgun | rush the secret with 🔫</title>
        <meta name="description" content="🔫faster than before, the decentralized clipboard with Gun.js🔫" />
        <link rel="icon" href="/gun-logo.png" />
      </Head>
      <Header />
      <Box as={'main'} flex={1}>
        {children}
      </Box>
      <AlertMsg msg={alertMsg} setMsg={setAlertMsg} />
      <Footer />
    </Container>
  )
}

export default Layout;