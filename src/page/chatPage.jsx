import { Box, Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";
import axios from "axios";
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import MessageActions from '../components/messageActions/messageActions';
import MessageBox from '../components/messageBox/messageBox';
import RoomList from '../components/roomList/roomList';
import SearchBar from '../components/searchBar/searchBar';
import { ApiUrl } from '../config/apiUrl';
import { EventEnum } from '../enum/eventEnum';

const useStyle = makeStyles({
    chatPage: {
        position: 'fixed',
        overflow: 'hidden'
    },
    chatControl: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px'
    },
    chatBox: {

    },
    fullWidth: {
        width: '100%'
    },
    fullHeight: {
        height: '100vh'
    },
    borderLeft: {
        borderLeft: '1px solid #b2bec3'
    }
})

function ChatPage({socketRef}) {
    const classes = useStyle()
    const [roomList, setRoomList] = useState(null)
    const [selectedRoom, setSelectedRoom] = useState()
    const [messageList, setMessageList] = useState([])
    
    const handleSelectRoom = (room) => {
        setSelectedRoom(room)
    }

    useEffect(() => { //get message back from server
        selectedRoom && socketRef.current && socketRef.current.on(EventEnum.getNewMessage, message => {
            setMessageList(pre => [...pre, message.message])
        })
    }, [socketRef.current, selectedRoom])

    useEffect(() => {// get room list
            axios.get(ApiUrl.getRooms)
            .then(
                res => {
                    setRoomList(res.data)
                }
            )
            .catch(
                err => console.log(err)
            )
    }, [])

    useEffect(() => { //joining room
        setMessageList([])
        selectedRoom && socketRef.current.emit(EventEnum.joinRoom, selectedRoom.id)
        console.log(selectedRoom);
    }, [selectedRoom])

    const handleSendNewMessage = message => { //send new message to server
        socketRef.current.emit(EventEnum.sendNewMessage, message)
    }

    return (
        <Grid container spacing={0} className={classes.chatPage}>
            <Grid item xs={3} className={classes.fullHeight}>
                <Box className={classes.chatControl}>
                    <SearchBar />
                    <RoomList roomList={roomList} onSelect={handleSelectRoom} />
                </Box>
            </Grid>

            <Grid item xs={9} className={clsx(classes.fullHeight, classes.borderLeft)}>
                <Box className={classes.chatBox}>
                    <MessageBox messageList={messageList}/>
                    <MessageActions isShow={selectedRoom ? true : false} onSubmit={handleSendNewMessage}/>
                </Box>
            </Grid>
        </Grid>
    );
}

export default ChatPage;