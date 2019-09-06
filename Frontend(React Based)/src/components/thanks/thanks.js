import React, { Component } from 'react'
import {Avatar} from 'antd'
import "../../css/thanks.css"
import logo from '../../logo/logo.png';
import Loader from './loader';
// import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';
import * as url from '../UrlList'


const setBoothAccessUrl = url.setBoothAccessUrl;

class Thanks extends Component {
    state={
        loader:true
    }

    componentDidMount(){

        const id = window.localStorage.getItem('boothNo');;
        const data= {
          "id": id,
          "enable":false
        }
        console.log(id)
        console.log(data)
        axios.post(setBoothAccessUrl, data)
        .then(res=>{
          console.log(res)
          setTimeout(() => { this.setState({ loader: !this.state.loader }) }, 2000);
        
          // setTimeout(() => {return this.props.history.push('/voter')}, 10000);
          setTimeout(() => {return window.location.reload()}, 6000);
        })
        .catch(err=>{
        //   alert("Sorry, cant reach the server")
          console.log(err)
        })

        // setTimeout(() => { this.setState({ loader: !this.state.loader }) }, 3000);
        
        // // setTimeout(() => {return this.props.history.push('/voter')}, 10000);
        // setTimeout(() => {return window.location.reload()}, 10000);

    }


    render() {
        if(this.state.loader===true){
            return <div id = "thanks">
                <div style={{marginLeft:"auto", marginRight:"auto", textAlign:'center'}}>
                    <Loader />
                </div>
            </div> 
        }

        return (
            <div>
                 <div>
                 <Zoom >
                        <div id="thanks" >
                        <div style={{marginLeft:"auto", marginRight:"auto", textAlign:'center'}}>
                        
                        {/* <div> <img src={logo} className="logo" /></div> */}
                        <Avatar size={200} shape="square" src={logo} 
                                  style={{alignContent:"center", 
                                          margin: 0,
                                          padding:0, 
                                          marginLeft: "auto", 
                                          marginRight: "auto", 
                                          display: "block"
                                          }}
                          />
                            <h1 >Thank You!</h1>
                            <br />
                            <h3><strong>
                                Please collect the printed copy of your Ballot Paper from the printer and drop it in the Ballot Box.      
                            </strong> 
                            </h3>
                            <hr />
                            <p>
                            Having trouble? 
                            {/* <a href="">Contact us</a> */}
                            <br />
                            Please Contact with <b> Catalyst BD </b>. 
                            </p>
                        </div>
                        </div>
                    </Zoom>
                    </div>
            </div>
        )
    }
}

export default Thanks;