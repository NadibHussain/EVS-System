import img from '../../images/vote.jpg'
 import { makeStyles } from '@material-ui/core/styles';
 const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage:  `url(${img})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      alignItems: 'center',
      backgroundColor:'#263238',
  
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    side: {
      background: "rgb(161, 65, 25)"
      
    },
    title: {
      color: "white",
      textAlign: 'center',
      fontWeight:'bold'
      
    },
    submit:{
      fontSize:"50px",
      marginTop:"30px",
      '&:hover': {
        background: "#0080ff",
     },
     backgroundColor:"#0080ff"
    }
  }));
  export default useStyles;