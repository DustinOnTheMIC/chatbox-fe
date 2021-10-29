import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const useStyle = makeStyles({
  roomList: {
    width: '80%',
  },
  room: {
    border: '1px solid #b2bec3',
    marginBottom: '10px',
    borderRadius: '15px'
  },
  actions: {
    color: '#FFFFFF'
  }
})

const RoomList = ({roomList, onSelect}) => {
  const classes = useStyle()

  const handleClickRoom = room => {
    onSelect(room)
  }

  return (
    <List className={classes.roomList}>
      {
        roomList && roomList.map((item, index) =>
          <Box key={index} className={classes.room}>
            <ListItem
              button
              className={classes.room}
              onClick={() => handleClickRoom(item)}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon className={classes.actions}/>
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar src="https://mui.com/static/images/avatar/1.jpg"/>
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
              />
            </ListItem>
          </Box>
        )
      }
    </List>
  )
};

export default RoomList;
