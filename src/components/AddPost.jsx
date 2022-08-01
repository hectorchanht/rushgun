import { AddIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Textarea } from '@chakra-ui/react';
import { useAtom } from "jotai";
import React from 'react';
import gun from '../libs/gun';
import { threadIdAtom } from "../libs/jotaiAtoms";
const dayjs = require('dayjs');


const AddPost = () => {
  const [value, setValue] = React.useState('');
  const [thread] = useAtom(threadIdAtom);
  const path = React.useMemo(() => thread ? `t/${thread}` : gun?.user()?.is ? `u/${gun?.user()?.is?.alias}` : 'data', [thread, gun?.user()])

  const handleInputChange = (e) => setValue(e?.target?.value);

  const sub = () => {
    console.log(` AddPost.jsx --- path:`, path)
    if (!value) return;

    // if user if not login, submit to "data", other submit to "user" or "thread"
    gun.get(path).put({ [dayjs().unix()]: value });
    setValue('');
  }

  return (
    <HStack>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='say any thing you want'
      />
      <IconButton
        onClick={sub}
        icon={<AddIcon />}
      />
    </HStack>
  );
}

export default AddPost;