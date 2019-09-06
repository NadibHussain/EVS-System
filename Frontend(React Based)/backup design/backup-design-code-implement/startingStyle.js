// import img from '../../images/vote.jpg'
import img from '../../images/startvote.png'
 import { makeStyles } from '@material-ui/core/styles';
 const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',

    },
    triangleBottomright: {
      width: 0,
      height: 0,
      borderBottom: "300px solid #ABF2A3",
      borderLeft: "1800px solid transparent",
      position: 'fixed', 
      bottom:"0%",
      right:"0%",

    },
    triangleTopLeft: {
      width: 0,
      height: 0,
      borderTop: "100vh solid #ABF2A3",
      borderRight: "200px solid transparent",
    },
    triangleBottomLeft: {
      width: 0,
      height: 0,
      borderBottom: "250px solid 	#32CD32",
      borderRight: "400px solid transparent",
      // borderLeft: "200px solid red",
    },
    triangleBottomLeftOne: {
      width: 0, 
      height: 0, 
      borderTop: "61px solid transparent",
      borderLeft: "60px solid green",
      borderBottom: "189px solid transparent",
      opacity:0.9,

    }
  
  
  }));
  export default useStyles;