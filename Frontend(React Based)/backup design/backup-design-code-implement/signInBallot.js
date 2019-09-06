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
    <div>
      <div className="fixed-bottom">
    <div className={classes.triangleBottomLeft } ></div></div>
    <div className="fixed-bottom">
    <div className={classes.triangleBottomLeftOne } ></div></div>
    <div className={classes.triangleTopLeft}></div>    
    <div className={classes.triangleBottomright}> </div>

    </div>
  );
}

export default SignInSide;