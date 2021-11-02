import { Avatar, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

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
  },
  avatar: {
    height: "40px",
    width: "40px",
    borderRadius: "50%"
  }
})

const Message = ({message}) => {
  const classes = useStyle()
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  const userId = userInfo ? userInfo.id : null
  const [img, setImg] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = message.ava
    setImg(img)
  }, [message.ava])

  const handleShowImg = () => {
    window.open(message.ava, "_blank")
  }

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
        <img className={classes.avatar} crossOrigin="anonymous" src={message.ava} onClick={handleShowImg}/>
        <Box className={clsx(classes.content, userId && message.id === userId && classes.messageLeft)}>
          {message.content}
        </Box>
      </Stack>
    
  )
};

export default Message;
