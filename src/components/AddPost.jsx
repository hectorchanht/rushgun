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

  const path = React.useMemo(
    () => thread
      ? `t/${thread}`
      : gun?.user()?.is
        ? `u/${gun?.user()?.is?.alias}`
        : 'd/public'
    , [thread, gun?.user()?.is]
  )
  const handleInputChange = (e) => setValue(e?.target?.value);

  const sub = () => {
    console.log(` AddPost.jsx -subsubsub-- path:`, path)
    if (!value) return;

    // if (gun?.user()?.is) {
    //   gun?.user().get('d/public').put({ [dayjs().unix()]: value });
    // } else {
    //   gun.get(path).put({ [dayjs().unix()]: value });
    // }

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