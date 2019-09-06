import React, { Component  } from 'react';
import 'antd/dist/antd.css';
import { List, Card, Row, Col, Avatar  } from 'antd';
import PrintBallotHeader from '../PrintBallotHeader'
import 'pretty-checkbox/dist/pretty-checkbox.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../../../../css/PrintPresidentBallot.css'

// const { Meta } = Card;

class PrintPresidentBallot extends Component {
 
    componentDidMount(){
        console.log(this.props.vote)
    var x=document.getElementById(this.props.vote)
      if(x!=null)
      {
        x.checked=true;
      }
    //   setTimeout(() => {
    //     this.props.handlesubmit()
    //   }, 200);
      
    }
    render() {

      return (
          <div >
              <form>
              <Row>
              <Col span={4}> </Col>
              <Col span={16}> 
                <PrintBallotHeader select={1} totalCandidate={this.props.data.length} post={this.props.postName}/>             
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
                        <Row style={{fontSize:25, fontWeight:"bold", textAlign:"center"}}>
                          <Col span={4} >{index+1}</Col>
                          <Col span={8} style={{textAlign:"left"}}>
                            <p>{item.name}</p>
                            <p>{item.membershipId}</p>
                            {/* <p>{item.membershipId}</p> */}
                          </Col>
                          <Col span={7}>
                          <Avatar size={150} shape="square" src={item.url} 
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
                          <div className="pretty p-icon p-smooth font" id = "checkboxContainer" >
                            <input type="radio" name="cb0" 
                                //   onClick={this.props.handleCheckboxChange}
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
                <div id="message" style={{textAlign:'justify', fontSize:30, marginTop:10}}> Note: Please drop the printed ballot paper in the <b>{this.props.postName} ballot box</b>.</div>
              
              </Col>
              </Row>
              
              <br />
              </form>
            </div>
        );

    }
}

export default PrintPresidentBallot;

