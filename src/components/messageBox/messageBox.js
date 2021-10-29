import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect, useRef } from "react";
import Message from "../message/message";

const useStyle = makeStyles({
  messageBox: {
    height: '93vh',
    overflowY: 'auto',
    overflowX: 'hidden'
  }
})

const MessageBox = ({messageList}) => {
  const endRef = useRef()
  const classes = useStyle()

  useEffect(() => {
    endRef.current.scrollIntoView()
  },[messageList])

  return (
    <Box className={classes.messageBox}>
      {
        messageList && messageList.map((item, index) =>
          <Message key={index} message={item}/>
        )
      }
      <Box ref={endRef}></Box>
    </Box>
  )
};

export default MessageBox;
