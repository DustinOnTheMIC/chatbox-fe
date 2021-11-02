import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormHelperText, TextField } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios'
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { ApiUrl } from "../../config/apiUrl";


const useStyle = makeStyles({
  formControl: {
    marginTop: '10px !important',
    marginBottom: '10px !important'
  },
  textField: {
    marginTop: '10px !important',
    marginBottom: '10px !important'
  }
})

const LoginForm = ({open, onClose}) => {
  const classes = useStyle()
  const [userName, setUserName] = useState("")
  const [password, setPassWord] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChangeUserName = e => {
    setUserName(e.target.value)
    setError(false)
  }

  const handleChangePassword = e => {
    setPassWord(e.target.value)
    setError(false)
  }

  const handleSubmit = () => {
    setLoading(true)
    if(userName && password) {
      const data = {
        userName,
        password
      }
      console.log();
      axios.post(ApiUrl.login, {data: JSON.stringify(data)})
      .then(
        res => {
          localStorage.setItem('userInfo', JSON.stringify(res.data))
          onClose()
          setLoading(false)
        }
      )
      .catch(
        err => {
          setError(true)
          setLoading(false)
        }
      )
    } else {
      setError(true)
      setLoading(false) 
    }
  }

  return (
    <Dialog open={open}>
      <DialogTitle>Login</DialogTitle>
      
      <DialogContent>
        <FormControl className={classes.formControl}>
          <TextField className={classes.textField} onChange={handleChangeUserName} value={userName} label="User Name"/>
          <TextField className={classes.textField} onChange={handleChangePassword} value={password} label="Password"/>
        </FormControl>
        {error && <FormHelperText error>User name or password was wrong</FormHelperText>}
        
        <DialogActions>
          {
            loading ? 
              <LoadingButton loading variant="outlined">
                Login
              </LoadingButton>
            :
              <Button onClick={handleSubmit} variant="outlined">
                Login
              </Button>  
        }
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
};

export default LoginForm;
