import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Alert, Box, Button, HStack, IconButton, Input, useColorMode } from "@chakra-ui/react";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";
import gun from "../../libs/gun";
import { alertMsgAtom, threadIdAtom } from "../../libs/jotaiAtoms";


const AlertMsg = ({ msg }) => {
  if (!msg) return null;
  return <Alert alignItems='center' justifyContent='center'
    textAlign='center' status="error">
    {msg}
  </Alert>;
};

const defaultUser = { username: '', password: '' };

const Header = () => {
  const [alertMsg, setAlertMsg] = useAtom(alertMsgAtom);
  const [thread, setThreadIdAtom] = useAtom(threadIdAtom);
  const { toggleColorMode, colorMode } = useColorMode();
  const [{ username, password, }, setUser] = React.useState(defaultUser);

  const setUsername = (e) => setUser((d) => ({ ...d, username: e.target.value }));
  const setPassword = (e) => setUser((d) => ({ ...d, password: e.target.value }));

  const registerGun = () => {
    gun.user().create(username, password, (d) => {
      if (d.err) {
        setAlertMsg(d.err);
      } else {
        setUser(dd => ({ ...dd, ...d }))
        setAlertMsg("");
      }
    });
  };

  const loginGun = () => {
    gun.user().auth(username, password, (d) => {
      if (d.err) {
        setAlertMsg(d.err);
      } else {
        setUser(dd => ({ ...dd, ...d }))
        setAlertMsg("");
      }
    });
  };

  const setThread = () => setThreadIdAtom(username);
  const exitThread = () => {
    setThreadIdAtom('');
    setUser(d => ({ ...d, username: '' }));
  };

  const ToggleColor = () => <IconButton
    variant={"ghost"}
    colorScheme="blue"
    aria-label="toggle ColorMode"
    icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    onClick={toggleColorMode}
  />;

  const IsLogin = () => {
    const logout = () => gun.user().leave().then(() => setUser(defaultUser))
    return <>
      <Box>
        {gun.user().is.alias}
      </Box>
      <Button variant={"ghost"} onClick={logout}>
        logout
      </Button>
    </>
  }

  return (
    <Box as={"header"} m={2}>
      <HStack p={2} borderRadius={8} boxShadow="lg" spacing="24px" justifyContent={"space-between"}>
        <Image src={"/hating-cat.jpg"} alt={"logo"} height={"38px"} width={"38px"} />

        <ToggleColor />

        {
          gun.user().is
            ? <IsLogin />
            : (thread
              ? (
                <>
                  <Box>@{thread}</Box>
                  <Button variant={"ghost"} onClick={exitThread}>
                    exit
                  </Button>
                </>
              ) : (
                <>
                  <Input value={username} width="auto" placeholder="username/thread" onChange={setUsername} />
                  {username && username.length >= 4 && (
                    <Input value={password} width="auto" placeholder="password" onChange={setPassword} />
                  )}

                  {password.length > 4 &&
                    <>
                      <Button variant={"ghost"} onClick={registerGun}>Register</Button>
                      <Button variant={"ghost"} onClick={loginGun}>Login</Button>
                    </>
                  }
                  <Button isDisabled={!username.length} variant={"ghost"} onClick={setThread}>Thread</Button>
                </>
              ))}
      </HStack>

      <AlertMsg msg={alertMsg} />
    </Box>
  );
};

export default Header;
