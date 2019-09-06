import React, { Component } from 'react'
// import { Button } from 'react-bootstrap';
import ReactToPrint from "react-to-print";
import { Card, Button, Avatar } from 'antd';
// import { Card, Button, Switch  } from 'antd';
import axios from "axios";
import * as url from '../UrlList'
import '../../css/slip.css'

const { Meta } = Card;

class VoterCard extends Component {
  constructor(props) {
    super(props);
    // console.log(props.voteEnable)
    this.state = {
      enable: props.voteEnable,
      id:props.id
    };
  }
  onChangeSwitch=(e)=>{
    console.log(e)
    console.log(this.props.id)
    // console.log(event.target.value)
    // console.log(checked)

    const data={
      id: this.props.id,
      enable: e
    }
      console.log(data)

      // console.log(url.enableVote)

      axios.post(url.enableVote,data)
      .then(res=>{
        console.log('ok')
      })
      .catch(e=>{
        console.log(e)
      })
  }
  
  render() {
    return (
      <div className="container d-flex justify-content-center PrintSection" style= {{marginBottom:20}}>
        <Card
            id = "printarea"    
            style={{ width: 300, marginTop:0 }}
            cover={
              // <img
              //   alt="example"
              //   src={this.props.pic}
              //   style={{height: 250}}
              // />
              <div style={{alignItems:'center'}}>
              <Avatar size={300} shape="square" src={this.props.pic} />
              </div>
              
            }
            actions={[ <div><p style={{borderTop:'1px solid black',padding:10, marginTop:60,color:'black', fontSize:15,fontWeight:'bold'}}> Election Commissioner </p></div>            ]}
            // actions={[ 
            //   <Switch defaultChecked={this.state.enable} onClick={this.onChangeSwitch} checkedChildren="ON" unCheckedChildren="OFF"/>

            // ]}
          >
            <Meta
              title={<div style={{padding:5}}> Name: {this.props.name} <br /> Membership ID: {this.props.id}</div>}
              // description={
              // <div>
              //     <p>Membership ID: {this.props.id}</p>
              //     <h5 style= {{ color:'black',alignContent:'center'}}>Secret Key: </h5>  <h3 style= {{ color:'red'}}>{this.props.password}</h3>
              // </div>}
            />
          </Card>
          {/* {this.state.id+this.state.enable} */}
      </div>
    )
  }
}
// 

class CardPrint extends Component {
  
  state={
    showEnableButton:false
  }

  disableVoterSlip=()=>{
    const data={
      id: this.props.id,
      enable: true,
    }
      console.log(data)

      if(this.props.voteEnable === false){
        axios.post(url.enableVote,data)
        .then(res=>{
          console.log('ok')
          window.location.reload()
        })
        .catch(e=>{
          console.log(e)
        })
      }
      // else{
      //   alert('This slip has been printed before')
      // }
  }

  // beforePrint=()=>{
  //   if(this.props.voteEnable === true){
  //     if(window.confirm("Voter slip of this member already printed once.")){
  //       return true
  //     };
  //     return false;

  //     // confirm("Press a button!");
  //   }
  // }

  showEnableButton =()=>{
    this.setState({
      showEnableButton:true
    })
  }
  render() {
    return (
      <div>
        <VoterCard ref={el => (this.componentRef = el)}
        name={this.props.name}
        id = {this.props.id} 
        pic = {this.props.pic}
        password = {this.props.password} 
        voteGiven = {this.props.voteGiven} 
        voteEnable = {this.props.voteEnable}
        onChangeSwitch ={this.props.onChangeSwitch}
        />

        {this.props.voteEnable === false ? <ReactToPrint
          trigger={() => <Button type="primary" size='large' onClick={this.beforePrint} style={{margin:10}}>Print</Button>}
          content={() => this.componentRef} 
          onPrintError={()=>alert('Print is not successful')}
          // onBeforePrint={this.beforePrint}
          onAfterPrint={this.showEnableButton}
        /> : <div><h4>Already print the voter slip once.</h4><p>Note: For further issue, contact with tech team.</p></div>}

        {this.state.showEnableButton === true ?
            <Button type="primary" size='large' onClick={this.disableVoterSlip} style={{margin:10}}>Vote enable</Button> : null
        }
      </div>
    );
  }
}

export default CardPrint;