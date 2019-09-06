import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import * as url from '../UrlList'
import PresidentBallot from './BallotPaper/President/PresidentBallot'
import '../../css/signInBallot.css';
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
          setMessage( "Booth is not open")
          return handleClick()
        }
        
    })
    .catch(err=>{

    })
    console.log(window.localStorage.getItem('boothNo'));

  }
  if(newComponent===true){
    return (
      <div>
                    
        <PresidentBallot />
      </div>)
  }
  return (
    <div container component="main" className={classes.root}>
    <div style={{textAlign:"center", paddingTop:"30vh", fontSize:"50px", fontWeight:"bold", color:"#64cc37"}}>
      <div> Welcome to Baridhara Cosmopolitan <br /> Club Electon</div>
      <div> Booth No: {boothNo} </div>

    </div>
    <div style={{textAlign:'right', width:600, float:"right", marginTop:'22vh', marginRight:"13vh",}} >
           <Button 
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit} 
              onClick={getBoothStatus}
              onContextMenu={getBoothStatus}
            >
              Touch here to start your vote
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
</div>

      
  );
}

export default SignInSide;