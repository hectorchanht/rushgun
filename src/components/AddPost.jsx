import { CheckIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Textarea } from '@chakra-ui/react';
import { useAtom } from "jotai";
import React from 'react';
import gun from '../libs/gun';
import { aliasAtom, threadIdAtom } from "../libs/jotaiAtoms";
const dayjs = require('dayjs');


const AddPost = () => {
  const [value, setValue] = React.useState('');
  const [thread] = useAtom(threadIdAtom);
  const [alias] = useAtom(aliasAtom);

  const path = React.useMemo(
    () => thread
      ? `t/${thread}`
      : alias
        ? `u/${alias}`
        : 'd/public'
    , [thread, alias]
  )
  const handleInputChange = (e) => setValue(e?.target?.value);

  const sub = () => {
    if (!value) return;

    gun.get(path).put({ [dayjs().unix()]: value });

    setValue('');
  }

  return (
    <HStack>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='leave secrets here for people to find ~'
      />
      <IconButton
        isDisabled={!value}
        variant={"ghost"}
        onClick={sub}
        icon={<CheckIcon />}
      />
    </HStack>
  );
}

export default AddPost;