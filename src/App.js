import { useEffect, useRef, useState } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';
import LoginForm from './components/loginForm/loginForm';
import { ApiUrl } from './config/apiUrl';
import ChatPage from './page/chatPage';

function App() {

  const socketRef = useRef()
  const [login, setLogin] = useState(false)

  useEffect(() => {
    setLogin(true)
  }, [])

  useEffect(() => {
    socketRef.current = socketIOClient.connect(ApiUrl.base)
  }, [])

  const handleCloseLogin = () => {
    setLogin(false)
  }
  
  return (
    <>
      <ChatPage socketRef={socketRef}/>
      {
        login && <LoginForm open={login} onClose={handleCloseLogin}/>
      }
    </>
  );
}

export default App;
