import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import * as url from '../UrlList'
import PresidentBallot from './BallotPaper/President/PresidentBallot'
import '../../css/signInBallot.css';
// import img from '../../images/vote.jpg'
import baridhara from '../../logo/logo.png'
import {  Avatar  } from 'antd';
import useStyles from './startingStyle'
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
// 


// material part css classes
const getBoothAccessUrl = url.getBoothAccessUrl



//main funtion
const SignInSide = (props) => {

const classes = useStyles();
const [newComponent, setNewComponent]=useState(false)
const[open, setOpen]=useState(false);
const[message, setMessage]=useState('');


const boothNo = window.localStorage.getItem('boothNo');

// snackbar open method 
const handleClick =  () => {
  setOpen(true);
};

// direction could be change left/right/up
// down snack slider method    
const Transition = (props) => {
  return <Slide {...props} direction="right" className={classes.message} id="signInsliderMessage"/>;
}

// snackbar close method
const handleClose = () => {
  setOpen(false)
};


  const getBoothStatus=(e)=>{
    // console.log(e)
    const url = `${getBoothAccessUrl}/${boothNo}`

    // request for get boothStatus 
    axios.get(url)
    .then(res=>{
        console.log(res.data)
        if(res.data==='access'){
          setNewComponent(true)
        }else{
          setNewComponent(false)
          // alert('booth is not open yet')
          setMessage(<h2 style={{color:'white'}}> Booth is not open </h2>)
          return handleClick()
        }
        
    })
    .catch(err=>{

    })
    // console.log(window.localStorage.getItem('boothNo'));

  }
  if(newComponent===true){
    return (
      <div>

        <PresidentBallot />
      
      </div>)
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} >
        {/* -----instruction */}
        </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.side}>
        <div className={classes.paper}>
        <Avatar src={baridhara} shape="square" size={200} />
        <br/>
        <h1 className={classes.title}>Welcome to Baridhara Cosmopolitan Club Election <br /> Booth No: {boothNo} </h1>
       
        <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit} 
              onClick={getBoothStatus}
              onContextMenu={getBoothStatus}
            >
              Touch Here To Start Vote
            </Button>
          
        </div>
        <Snackbar
          open={open}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          onClose={handleClose}
          TransitionComponent={Transition}
          autoHideDuration={4000}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          

        />
      </Grid>
    </Grid>
  );
}

export default SignInSide;