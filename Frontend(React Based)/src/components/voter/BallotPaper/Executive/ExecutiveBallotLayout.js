import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { List, Card, Row, Col, Button, Avatar, Modal  } from 'antd';
import BallotHeader from '../BallotHeader';
import Snackbar from '@material-ui/core/Snackbar';
import 'pretty-checkbox/dist/pretty-checkbox.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../../../../css/ExecutiveBallotLayout.css'
import PrintExecutiveBallot from './PrintExecutiveBallot'


const { Meta } = Card;

class ExecutiveBallotLayput extends Component {
  state={
    // loading: false,
    visible: false,
    modalSelection:'',
    printComponent:false

  }
  showModal = () => {
    console.log(this.props.vote)
    const id = this.props.vote
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

    this.setState({printComponent:true})
    return this.props.handlesubmit()

    // this.setState({ visible: false },()=>{if(this.state.visible===false){return this.props.handlesubmit()}});

    // this.handleCancel();
    // return setTimeout(this.props.handlesubmit(),1000)
    
  }

    render() {
      const { visible } = this.state;
      if(this.state.printComponent===false){
        return (
            <div className="PrintArea">
              {this.props.count<10 ? <div id="countBar" className="countBar text-center">
                          <h1 style={{color:"white"}}>{this.props.count}</h1> 
                        </div> : 
                        <div id="countBar" className="countBar" style={{backgroundColor:"green"}}>
                          <h1 style={{color:"white"}}> {10} </h1>
                        </div>
                        }
              <form >
              <Row style={{marginTop:-100}}>
              <Col span={2}></Col>
              <Col span={19}> 
                <BallotHeader totalCandidate={this.props.data.length} select={10} post={this.props.postName}/>             
                {/* header List like table header */}
               <List
                    grid={{ gutter: 16, column: 2 }}
                    dataSource={this.props.dataHeader}
                    renderItem={item => (
                    <List.Item>
                      <Card >
                      <Row style={{fontSize:18, fontWeight:"bold", textAlign:"center"}}>
                        <Col span={4} >{item.title}</Col>
                        <Col span={8} >{item.name}</Col>
                        <Col span={7}>{item.image}</Col>
                        <Col span={5}>{item.icon}</Col>
                      </Row>
                      </Card>
                    </List.Item>
                    )}
                />
                {/* candidate List */}
                <List
                    grid={{ gutter: 16, column: 2 }}
                    dataSource={this.props.data}
                    renderItem={(item,index) => (
                    <List.Item>
                      <Card >
                        <Row style={{fontSize:16, fontWeight:"bold", textAlign:"center"}}>
                          <Col span={4}>{index+1}</Col>
                          <Col span={8} style={{textAlign:"left"}}>
                            <div>{item.name}</div>
                            <div>{item.membershipId}</div>
                          </Col>
                          <Col span={6}>
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
                          <Col span={6}>
                          <div className="pretty p-icon p-smooth" id = "checkboxContainer" >
                            <input 
                                  type="checkbox" 
                                  onClick= {this.props.handleCheckboxChange}
                                  id={item.membershipId}
                                  value = {item.membershipId}
                                  onContextMenu={this.props.handleCheckboxChange}
                                  />
                            <div className="state p-danger-o">
                              <i className="icon fa fa-close" />
                              <label></label>
                            </div>
                          </div>
                          </Col>
                        </Row>
                      </Card>
                    </List.Item>
                    )}
                /> 
                {/* <br /> */}
                <br />
                  {/* modal portion */}
                  {this.props.count ===10 ? <Button id="button" type="primary" onClick={this.showModal} onContextMenu={this.showModal} block size='large' style={{fontSize:50, height:100, backgroundColor:'green',  marginBottom:30, marginTop:5}}>
                          Vote
                        </Button> : null }
                    <Modal
                          id="BallotModal"
                          visible={visible}
                          closable={false}
                          title={<h2 style={{textAlign:'center'}}>Selected Candidates</h2>}
                          onOk={this.handleOk}
                          onCancel={this.handleCancel}
                          footer={[

                          ]}
                          style={{minWidth: 1300, top: 20, }}
                    >
                      <div>
                          <form onSubmit={this.props.handlesubmit} >
                            {/* <Row style={{alignItems:'center'}}> */}
                                {/* candidate List */}
                                <List
                                    style={{alignItems:'center', verticalAlign:'middle'}}
                                    grid={{ gutter: 16, 
                                      xs: 1,
                                      sm: 2,
                                      md: 4,
                                      lg: 4,
                                      xl: 4,
                                      xxl: 3, }}
                                    dataSource={this.state.modalSelection}
                                    renderItem={(item,index) => (
                                    <List.Item>
                                    <Card
                                      hoverable
                                      style={{ marginBottom:5,width: 300, height: 110, padding: 0, boxShadow:'0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}
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
                              <div style={{textAlign:'center', marginTop:40, fontWeight:'bold', fontSize:20}}> <span style={{color: 'red', textAlign:'center'}}> Attention: </span> After pressing on confirm vote, you can't be able to change your vote. </div>

                              {this.props.count ===10 ? <div style={{alignItems:'center', textAlign:'center', marginTop:40}}>
                                                        <Button key="back" type="primary" onClick={this.handleCancel} onContextMenu={this.handleCancel} style={{fontSize:30, height:70, backgroundColor:'red',  marginRight:20}}>
                                                          Change Vote
                                                        </Button>
                                                      <Button onClick={this.handleOnSubmit} onContextMenu={this.handleOnSubmit} id="button" type="primary" style={{fontSize:30, height:70, backgroundColor:'green'}}> 
                                                        Confirm Vote 
                                                        </Button>
                                                        
                                                        </div>: ''}
                              <br />
                          </form>
                        </div>
                    </Modal>
                    {/* modal portion end */}
                {/* {this.props.count ===10 ? <Button id= "button" type="primary" htmlType="submit" block size='large' style={{fontSize:50, height:100, backgroundColor:'green',  marginBottom:30, marginTop:5}}> Confirm </Button> : <br />} */}
                <div id="message" style={{display:'none', fontSize:30, fontWeight:'bold', marginTop:10, textAlign:'justify'}}> Note: Please drop the printed ballot paper to the {this.props.postName} ballot box.</div>               
              </Col>
              <Col span={3}></Col>

              </Row>
              <br />
              </form>
              <Snackbar
                open={this.props.open}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                onClose={this.props.handleClose}
                TransitionComponent={this.props.Transition}
                autoHideDuration={3000}
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{this.props.message}</span>}
              />
            </div>
        );}
        
        return (<PrintExecutiveBallot 
          data={this.props.data} 
          postName={this.props.postName} 
          dataHeader={this.props.dataHeader}
          vote={this.props.vote} 
          handlesubmit={this.props.handlesubmit} />)  
    }
}

export default ExecutiveBallotLayput;