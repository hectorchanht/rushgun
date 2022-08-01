import { CheckIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Alert, Box, HStack, IconButton, Input, useColorMode
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import gun from '../../libs/gun';


const AlertMsg = ({ msg }) => {
  // console.log(` Header.jsx --- msg:`, msg)

  if (!msg) return null;
  return <Alert status='error'>
    {msg}
  </Alert>
};

const Header = () => {
  const user = gun.user();
  const [alertMsg, setAlertMsg] = React.useState('');
  const [{ username, password }, setUser] = React.useState({ username: '1111', password: '11111111' });
  const setUsername = (e) => setUser(d => ({ ...d, username: e.target.value }));
  const setPassword = (e) => setUser(d => ({ ...d, password: e.target.value }));
  const { toggleColorMode, colorMode } = useColorMode();
  React.useEffect(() => {
    // console.log(` Header.jsx --- user.is:`, user.is)

  }, [user.is])


  const registerGun = () => {
    try {
      user.create(username, password, (d) => {
        // console.log(` Header.jsx --- d:`, d)
        if (d.err) {
          // console.log(` Header.jsx --- err:`, d.err)

          setAlertMsg(d.err);
        } else {
          setAlertMsg('');
        }

      });
    } catch (error) {
      // setAlertMsg(error);
      // console.log(` Header.jsx --- error:`, error)
    }
  }

  const loginGun = () => {
    // console.log(` Header.jsx --- username, password:`, username, password)




    user.auth(username, password, (d) => {
      if (d.err) {
        setAlertMsg(d.err);
      } else {
        // console.log(` Header.jsx --- d:`, d)
        setAlertMsg('');
      }
    });
  };

  return <Box as={'header'} m={2}>

    <HStack p={2} borderRadius={8} boxShadow="lg" spacing='24px' justifyContent={'space-between'}>
      <Image src={'/hating-cat.jpg'} alt={'logo'} height={'38px'} width={'38px'} />
      <Input value={username} width='auto' placeholder='username' onChange={setUsername} />
      <Input value={password} width='auto' placeholder='password' onChange={setPassword} />
      <IconButton
        variant={'ghost'}
        colorScheme='blue'
        aria-label='Search database'
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
      <IconButton
        variant={'ghost'}
        colorScheme='blue'
        aria-label='Search database'
        icon={<CheckIcon />}
        onClick={loginGun}
      />
    </HStack>
    <AlertMsg msg={alertMsg} />
  </Box>
};

export default Header;