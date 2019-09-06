import React, { Component  } from 'react';
import 'antd/dist/antd.css';
import { List, Card, Row, Col, Button, Avatar, Modal  } from 'antd';
import BallotHeader from '../BallotHeader'
import 'pretty-checkbox/dist/pretty-checkbox.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../../../../css/ExecutiveBallotLayout.css'
import PrintPresidentBallot from './PrintPresidentBallot'
// import ReactToPrint from "react-to-print";

const { Meta } = Card;

class PresidentBallotLayout extends Component {

  state={
    // loading: false,
    visible: false,
    modalSelection:'',
    printComponent:false
  }
  showModal = () => {
    console.log(this.props.vote)
    const id = [this.props.vote]
    const data = this.props.data

    const modalShowData= data.filter((word)=> id.includes(word.membershipId))
    console.log(modalShowData)
    this.setState({
      visible: true,
      modalSelection:modalShowData

    });

  };

  handleOk = () => {
    // this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleOnSubmit = () => {
    console.log("here")
    // document.getElementById("AGP-0001").checked= true;
    // this.setState({ visible: false },()=>{if(this.state.visible===false){setTimeout(this.props.handlesubmit(),3000)}});
    
    this.setState({printComponent:true})
    return this.props.handlesubmit()
    // this.handleCancel();
    // setTimeout(this.props.handlesubmit(),1000)
  }
    render() {
      const { visible } = this.state;

      if(this.state.printComponent===false){
      return (
          <div >
            {this.props.count===0 ? <div className="countBar text-center">
                        <h1 style={{color:"white"}}>{this.props.count}</h1> 
                      </div> : 
                      <div className="countBar" style={{backgroundColor:"green"}}>
                        <h1 style={{color:"white"}}> {1} </h1>
                      </div>
                      }
              <form  >
              <Row style={{marginTop:-100}}>
              <Col span={4}> </Col>
              <Col span={16}> 
                <BallotHeader select={1} totalCandidate={this.props.data.length} post={this.props.postName}/>             
                {/* header List like table header */}
               <List
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={this.props.dataHeader}
                    renderItem={item => (
                    <List.Item>
                      <Card >
                      <Row style={{fontSize:20, fontWeight:"bold", textAlign:"center"}}>
                        <Col span={4}>{item.title}</Col>
                        <Col span={8}>{item.name}</Col>
                        <Col span={7}>{item.image}</Col>
                        <Col span={5}>{item.icon}</Col>
                      </Row>
                      </Card>
                    </List.Item>
                    )}
                />
                {/* candidate List */}
                <List
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={this.props.data}
                    renderItem={(item,index) => (
                    <List.Item>
                      <Card >
                        <Row style={{fontSize:20, fontWeight:"bold", textAlign:"center"}}>
                          <Col span={4} >{index+1}</Col>
                          <Col span={8} style={{textAlign:"left"}}>
                            <h6>{item.name}</h6>
                            <h6>{item.membershipId}</h6>
                            {/* <p>{item.membershipId}</p> */}
                          </Col>
                          <Col span={7}>
                          <Avatar size={100} shape="square" src={item.url} 
                                  style={{alignContent:"center", 
                                          margin: 0,
                                          padding:0, 
                                          marginLeft: "auto", 
                                          marginRight: "auto", 
                                          display: "block"
                                          }}
                          />
                          </Col>
                          <Col span={5}>
                          <div>  
                          <div className="pretty p-icon p-smooth" id = "checkboxContainer" onContextMenu={this.props.handleCheckboxChange}>
                            <input type="radio" name="cb0" 
                                  onClick={this.props.handleCheckboxChange}
                                  value = {item.membershipId}
                                  style={{border:'1px solid red'}}
                                  id={item.membershipId}
                                  />
                            <div className="state p-danger-o">
                              <i className="icon fa fa-close"/>
                              <label></label>
                            </div>
                          </div>
                          </div>
                          </Col>
                        </Row>
                      </Card>
                    </List.Item>
                    )}
                /> 
                {/* modal portion */}
                {this.props.vote ? <Button id="button" type="primary" onClick={this.showModal} onContextMenu={this.showModal} block size='large' style={{fontSize:50, height:100, backgroundColor:'green',  marginBottom:30, marginTop:5}}>
                          Vote
                        </Button> : null }
                    <Modal id="BallotModal"
                          visible={visible}
                          closable={false}
                          title={<h2 style={{textAlign:'center'}}>Selected Candidate</h2>}
                          // onOk={this.handleOk}
                          onCancel={this.handleCancel}
                          footer={[
                            null, null,
                          ]}
                          style={{minWidth: 1000 }}
                    >
                      <div>
                          <form >
                            <Row style={{textAlign:'-moz-center'}}>
                                {/* candidate List */}
                                <List
                                    style={{alignItems:'center'}}
                                    grid={{ gutter: 16, column: 1 }}
                                    dataSource={this.state.modalSelection}
                                    renderItem={(item,index) => (
                                    <List.Item>
                                    <Card
                                      hoverable
                                      style={{ padding:5, width: 300, height: 110, boxShadow:'0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}
                                    >
                                      <Meta
                                        avatar={<div><Avatar src={item.url} shape="square" size={90}/></div>}
                                        //   description = {<div><h6 className=" text-success">{id.name}</h6> <p className="font-weight-bold" >{"Id: " + id.membershipId}</p></div>} 
                                          title =  {<Row >
                                                        <Col xs={16} ><h6>{item.name}</h6><p className="font-weight-bold" >{"ID: " + item.membershipId}</p></Col>
                                                    </Row> 
                                                    } 
                                        /> 
                                    </Card>
                                    </List.Item>
                                    )}
                                /> 
                                {/* end candidate list */}
                                </Row>
                              <div style={{textAlign:'center', marginTop:40, fontWeight:'bold', fontSize:20}}> <span style={{color: 'red', textAlign:'center'}}> Attention: </span> After pressing on confirm vote, you can't be able to change your vote. </div>
                              {this.props.vote ? <div style={{alignItems:'center', textAlign:'center', marginTop:40}}>
                                                        <Button key="back" type="primary" onClick={this.handleCancel} onContextMenu={this.handleCancel} style={{fontSize:30, height:70, backgroundColor:'red', marginRight:20}}>
                                                          Change Vote
                                                        </Button>
                                                        {/* <ReactToPrint
                                                          trigger={() => <Button id="button" type="primary" > Confirm Vote </Button>}
                                                          // onBeforePrint={this.handleOnSubmit}
                                                          content={() => this.componentRef}
                                                        /> */}
                                                        <Button onClick={this.handleOnSubmit} onContextMenu={this.handleOnSubmit} id="button" type="primary" style={{fontSize:30, height:70, backgroundColor:'green'}}> 
                                                          Confirm Vote 
                                                        </Button> 
                                                        </div>: null }
                              <br />
                          </form>
                        </div>
                    </Modal>
                    {/* modal portion end */}

                <div id="message" style={{textAlign:'justify',display:'none', fontSize:30, fontWeight:'bold', marginTop:10}}> Note: Please drop the printed ballot paper to the {this.props.postName} ballot box.</div>
              
              </Col>
              </Row>
              
              <br />
              </form>
            </div>
        );}

    return (<PrintPresidentBallot 
                      data={this.props.data} 
                      postName={this.props.postName} 
                      dataHeader={this.props.dataHeader}
                      vote={this.props.vote} 
                      handlesubmit={this.props.handlesubmit} />)    
    }
}

export default PresidentBallotLayout;

