import { Avatar, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import clsx from "clsx";
import React from "react";

const useStyle = makeStyles({
  message: {
    display: 'flex',
    alignItems: "center",
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '10px',
    width: '97%'

  },
  content: {
    background: '#FFFFFF',
    color: 'black',
    padding: '10px',
    borderRadius: '20px'
  },
  container: {
    width: '121vw'
  },
  messageLeft: {
    background: '#54a0ff',
    color: "#FFFFFF"
  }
})

const Message = ({message}) => {
  const classes = useStyle()
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const userId = userInfo ? userInfo.id : null

  return (
      <Stack 
        className={
          clsx(
            classes.message,
          )
        }
        direction={userId && userId === message.id ? 'row-reverse' : 'row'}
        spacing={2}
      >
        <Avatar src={message.ava}/>
        <Box className={clsx(classes.content, userId && message.id === userId && classes.messageLeft)}>
          {message.content}
        </Box>
      </Stack>
    
  )
};

export default Message;
