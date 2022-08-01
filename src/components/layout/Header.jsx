import { AddIcon, ArrowRightIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton, Input, useColorMode } from "@chakra-ui/react";
import { useAtom } from "jotai";
import React from "react";
import gun from "../../libs/gun";
import { alertMsgAtom, aliasAtom, threadIdAtom } from "../../libs/jotaiAtoms";


const defaultUser = { username: '', password: '' };

const Header = () => {
  const [alertMsg, setAlertMsg] = useAtom(alertMsgAtom);
  const [thread, setThreadIdAtom] = useAtom(threadIdAtom);
  const [_, setAliasAtom] = useAtom(aliasAtom);
  const { toggleColorMode, colorMode } = useColorMode();
  const [{ username, password, }, setUser] = React.useState(defaultUser);

  const setUsername = (e) => setUser((d) => ({ ...d, username: e.target.value }));
  const setPassword = (e) => setUser((d) => ({ ...d, password: e.target.value }));
  const transErrMsg = (msg) => msg.toLowerCase().replace('User', 'Secret').replace('user', 'secret').replace('created', 'taken');



  const registerGun = () => {
    gun.user().create(username, password, (d) => {
      if (d.err) {
        setAlertMsg(transErrMsg(d.err));
      } else {
        setAliasAtom(username)
        setUser(dd => ({ ...dd, ...d }))
        setAlertMsg("");
      }
    });
  };

  const loginGun = () => {
    gun.user().auth(username, password, (d) => {
      if (d.err) {
        setAlertMsg(transErrMsg(d.err));
      } else {
        setAliasAtom(username)
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
    const logout = () => {
      gun.user().leave();
      setUser(defaultUser);
      setAliasAtom('');
    }
    // const deleteUser = () => gun.user().delete(username, password);

    return <>
      <Box>
        🔫{' '}{gun.user()?.is?.alias || '404'}{' '}🎸
      </Box>
      {/* <IconButton variant={"ghost"} onClick={deleteUser} icon={<DeleteIcon />} /> */}
      <IconButton variant={"ghost"} onClick={logout} icon={<CloseIcon />} />
    </>
  }

  return (
    <Box as={"header"} mb={2}>
      <HStack p={2} borderRadius={8} boxShadow="lg" spacing="24px" justifyContent={"space-between"}>
        {/* <Image src={"/hating-cat.jpg"} alt={"logo"} height={"38px"} width={"38px"} /> */}

        <ToggleColor />

        {
          gun.user().is
            ? <IsLogin />
            : (thread
              ? (
                <>
                  <Box>@{thread}</Box>
                  <IconButton variant={"ghost"} onClick={exitThread} icon={<CloseIcon />} />
                </>
              ) : (
                <>
                  <Input value={username} width="auto" placeholder="secret token" onChange={setUsername} />
                  {username && username.length >= 4 && (
                    <Input value={password} width="auto" placeholder="password" onChange={setPassword} />
                  )}

                  {password.length > 4 &&
                    <>
                      <IconButton variant={"ghost"} onClick={registerGun} icon={<AddIcon />} />
                      {/* <Button variant={"ghost"} onClick={loginGun}>open</Button> */}
                    </>
                  }
                  <IconButton isDisabled={!username.length || alertMsg.length} variant={"ghost"} onClick={password.length ? loginGun : setThread} icon={<ArrowRightIcon />} />
                </>
              ))}
      </HStack>
    </Box>
  );
};

export default Header;
