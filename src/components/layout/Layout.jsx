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
        {/* <!-- Primary Meta Tags --> */}
        <title>rushgun | rush the secret with ð«</title>
        <meta name="title" content="rushgun | rush the secret with ð«" />
        <meta name="description" content="decentralized text storage with Gun.jsð«" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rushgun.vercel.app/" />
        <meta property="og:title" content="rushgun | rush the secret with ð«" />
        <meta property="og:description" content="decentralized text storage with Gun.jsð«" />
        <meta property="og:image" content="https://rushgun.vercel.app/gun-logo.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rushgun.vercel.app/" />
        <meta property="twitter:title" content="rushgun | rush the secret with ð«" />
        <meta property="twitter:description" content="decentralized text storage with Gun.jsð«" />
        <meta property="twitter:image" content="https://rushgun.vercel.app/gun-logo.png" />

        <link rel="icon" href="/gun-logo.png" />
      </Head>
      <Header />
      <Box p={2} as={'main'} flex={1}>
        {children}
      </Box>
      <AlertMsg msg={alertMsg} setMsg={setAlertMsg} />
      <Footer />
    </Container>
  )
}

export default Layout;