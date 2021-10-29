import SendIcon from '@mui/icons-material/Send';
import { FormControl, IconButton, OutlinedInput } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyle = makeStyles({
  messageActions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    width: '90%',
    height: '45px',
    borderRadius: '15px !important',
    marginRight: '10px',
    background: '#FFFFFF'
  }
})

const MessageActions = ({onSubmit, isShow}) => {
  const classes = useStyle()
  const [value, setValue] = useState()
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))

  const handleSubmit = (e) => {
    setValue("")
    value && onSubmit({
      id: userInfo.id,
      content: value,
      ava: userInfo.ava
    })
  }

  const handleEnter = e => {
    if(e.keyCode === 13 && value){
      handleSubmit()
   }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    isShow ? 
    <FormControl className={classes.messageActions}>
      <OutlinedInput 
        className={classes.input}
        onChange={handleChange}
        // multiline
        maxRows={2}
        value={value}
        onKeyDown={handleEnter}
        endAdornment={
          <IconButton onClick={handleSubmit}>
            <SendIcon color="primary" fontSize="large"/>
          </IconButton>
        }
      > 
      </OutlinedInput>
    </FormControl>
    : <></>
  )
};

export default MessageActions;
