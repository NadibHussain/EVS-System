// import img from '../../images/vote.jpg'
import img from '../../images/startvote.png'
import { makeStyles } from '@material-ui/core/styles';
 const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
      backgroundImage:  `url(${img})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      alignItems: 'center',
      backgroundColor:'#263238',
    },

 
   side:{
    alignItems: 'right',
    // textAlign:"right",
    // float: "right"
   },

  title: {
      color: "white",
      textAlign: 'center',
      fontWeight:'bold'
      
    },
    submit:{
      fontSize:"35px",
      '&:hover': {
        background: "#64cc37",
     },
     textTransform:"none",
     color:"#19400e",
     padding: "30px",
     fontWeight: "bold",
     backgroundColor:"#64cc37",
  
   
    }
  }));
  export default useStyles;