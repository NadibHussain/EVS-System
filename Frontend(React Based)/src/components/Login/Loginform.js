import React ,{ useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import * as user from '../userData/UserData';
import * as methods from '../../authentication/Auth';
import { Link } from 'react-router-dom';

const  Loginform = (props) => {


  useEffect(() => {
    window.localStorage.clear();    
  }, []);
  // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour


  //only for styling
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    margin:'10%',
    color: theme.palette.text.primary,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  result: {
    padding: theme.spacing(2),
    paddingTop:0,
    textAlign: 'center',
    color: '#fff',
  },
  
}));
  const classes = useStyles();

  const handleInput=(e)=>
  {
    if(e.target.id==="id")
    {
      
      setusername(e.target.value);

    }
    if(e.target.id==="pass")
    {
      setupassword(e.target.value);
     
    }
  }
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    //if user is admin
    if(username===user.UserAdmin.userName && password=== user.UserAdmin.password){
      methods.setAdmin();
      document.getElementById("error").hidden=true;
      props.props.history.push('/admin')
      

    }
    // ----------------
     //if user is voter
    // else if(username===user.UserVoter.userName && password=== user.UserVoter.password){
    //   document.getElementById("error").hidden=true;
    //   methods.setVoter();
    //   console.log("voter access");
    //   props.props.history.push('/voter')
    // }
    else if(username===user.UserVoter1.userName && password=== user.UserVoter1.password){
      document.getElementById("error").hidden=true;
      methods.setVoter1();
      console.log("voter access");
      props.props.history.push('/voter')
    }    else if(username===user.UserVoter2.userName && password=== user.UserVoter2.password){
      document.getElementById("error").hidden=true;
      methods.setVoter2();
      console.log("voter access");
      props.props.history.push('/voter')
    }    else if(username===user.UserVoter3.userName && password=== user.UserVoter3.password){
      document.getElementById("error").hidden=true;
      methods.setVoter3();
      console.log("voter access");
      props.props.history.push('/voter')
    }    else if(username===user.UserVoter4.userName && password=== user.UserVoter4.password){
      document.getElementById("error").hidden=true;
      methods.setVoter4();
      console.log("voter access");
      props.props.history.push('/voter')
    }    else if(username===user.UserVoter5.userName && password=== user.UserVoter5.password){
      document.getElementById("error").hidden=true;
      methods.setVoter5();
      console.log("voter access");
      props.props.history.push('/voter')
    }    else if(username===user.UserVoter6.userName && password=== user.UserVoter6.password){
      document.getElementById("error").hidden=true;
      methods.setVoter6();
      console.log("voter access");
      props.props.history.push('/voter')
    }    else if(username===user.UserVoter7.userName && password=== user.UserVoter7.password){
      document.getElementById("error").hidden=true;
      methods.setVoter7();
      console.log("voter access");
      props.props.history.push('/voter')
    }    else if(username===user.UserVoter8.userName && password=== user.UserVoter8.password){
      document.getElementById("error").hidden=true;
      methods.setVoter8();
      console.log("voter access");
      props.props.history.push('/voter')
    }    else if(username===user.UserVoter9.userName && password=== user.UserVoter9.password){
      document.getElementById("error").hidden=true;
      methods.setVoter9();
      console.log("voter access");
      props.props.history.push('/voter')
    }    else if(username===user.UserVoter10.userName && password=== user.UserVoter10.password){
      document.getElementById("error").hidden=true;
      methods.setVoter10();
      console.log("voter access");
      props.props.history.push('/voter')
    }
    // -------------------------
     //if user is Intake officer
    else if(username===user.UserIntake.userName && password=== user.UserIntake.password){
      document.getElementById("error").hidden=true;
      methods.setIntake();
      console.log("intake access");
      props.props.history.push('/intake')
    }
     //if user is Intake1 
     else if(username===user.UserIntake1.userName && password=== user.UserIntake1.password){
      document.getElementById("error").hidden=true;
      methods.setIntake1();
      console.log("intake access");
      props.props.history.push('/intake')
    }
     //if user is Intake2 
     else if(username===user.UserIntake2.userName && password=== user.UserIntake2.password){
      document.getElementById("error").hidden=true;
      methods.setIntake2();
      console.log("intake access");
      props.props.history.push('/intake')
    }
     //if user is Intake3 
     else if(username===user.UserIntake3.userName && password=== user.UserIntake3.password){
      document.getElementById("error").hidden=true;
      methods.setIntake3();
      console.log("intake access");
      props.props.history.push('/intake')
    }
     //if user is Intake4 
     else if(username===user.UserIntake4.userName && password=== user.UserIntake4.password){
      document.getElementById("error").hidden=true;
      methods.setIntake4();
      console.log("intake access");
      props.props.history.push('/intake')
    }
     //if user is Intake5 
     else if(username===user.UserIntake5.userName && password=== user.UserIntake5.password){
      document.getElementById("error").hidden=true;
      methods.setIntake5();
      console.log("intake access");
      props.props.history.push('/intake')
    }
     //if user is Intake6 
     else if(username===user.UserIntake6.userName && password=== user.UserIntake6.password){
      document.getElementById("error").hidden=true;
      methods.setIntake6();
      console.log("intake access");
      props.props.history.push('/intake')
    }
     //if user is Intake7 
     else if(username===user.UserIntake7.userName && password=== user.UserIntake7.password){
      document.getElementById("error").hidden=true;
      methods.setIntake7();
      console.log("intake access");
      props.props.history.push('/intake')
    }
     //if user is Intake8 
     else if(username===user.UserIntake8.userName && password=== user.UserIntake8.password){
      document.getElementById("error").hidden=true;
      methods.setIntake8();
      console.log("intake access");
      props.props.history.push('/intake')
    }
     //if user is Intake9 
     else if(username===user.UserIntake9.userName && password=== user.UserIntake9.password){
      document.getElementById("error").hidden=true;
      methods.setIntake9();
      console.log("intake access");
      props.props.history.push('/intake')
    }
     //if user is Intake10 
     else if(username===user.UserIntake10.userName && password=== user.UserIntake10.password){
      document.getElementById("error").hidden=true;
      methods.setIntake10();
      console.log("intake access");
      props.props.history.push('/intake')
    }
    
    // if login is denide
    else{
      document.getElementById("error").hidden=false;
    }

      
  }
  const [username, setusername] = useState("");
  const [password, setupassword] = useState("");
  return (
    <div className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h1>EVS Login</h1>
              
              <br></br>
              <form onSubmit={handleSubmit}>
                <TextField
                    id="id"
                    label="Enter ID"
                    placeholder="Enter ID"
                    className={classes.textField}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    onChange={handleInput}
                    required
                />
                 <TextField
                    type="password"
                    id="pass"
                    label="Password ID"
                    placeholder="Password"
                    className={classes.textField}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    onChange={handleInput}
                    required
                />
                <Button variant="contained" color="primary" className={classes.button} type="submit" >
                    Login
                </Button>
                </form>
                <div className='error' id="error" hidden={true}>Login Unsuccessful</div>
            </Paper>
            <div className={classes.result}>
              <Button variant="contained" color="primary" >
                <Link to="/resultLive" style={{color:'white'}}>
                  <span>
                    Live Result
                  </span>
                </Link>
              </Button>  
              <Button variant="contained" color="secondary" className={classes.button} >
                <Link to="/resultAll" style={{color:'white'}} >
                  <span>
                    Result updated every 10                      
                  </span>
                </Link>
              </Button>
            </div>
        </Grid>
    </div>
  );
}
export default Loginform;