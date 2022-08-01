import { AddIcon } from '@chakra-ui/icons';
import { Box, IconButton, Textarea } from '@chakra-ui/react';
// import daysjs from 'daysjs';
import React from 'react';
import gun from '../libs/gun';
const dayjs = require('dayjs')

const AddPost = () => {
  let [value, setValue] = React.useState('')
  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  const sub = () => {
    console.log(` AddPost.jsx --- inputValue:`, value, gun)
    gun.get('data').put({ [dayjs().unix()]: value });
    setValue('');
  }

  console.log(` AddPost.jsx --- dayjs.unix():`, dayjs().unix())


  return (
    <Box>
      {/* <Text mb='8px'>Value: {value}</Text> */}
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='say any words you want'
      // size='sm'
      />
      <IconButton onClick={sub} aria-label='say any words you want' icon={<AddIcon />} />
    </Box>
  );
}

export default AddPost;