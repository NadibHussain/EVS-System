import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { List, Card, Row, Col, Avatar } from 'antd';
import BallotHeader from '../BallotHeader';
import 'pretty-checkbox/dist/pretty-checkbox.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../../../../css/PrintExecutiveBallot.css'



class PrintExecutiveBallot extends Component {
    componentDidMount(){
        console.log(this.props.vote)
        var i;
        for (i = 0; i < this.props.vote.length; i++) { 
            var x=document.getElementById(this.props.vote[i])
            if(x!=null)
            {
                x.checked=true;
            }
        }
                


        // this.props.vote.map((item)=>{
        //         var x=document.getElementById(item)
        //         if(x!=null)
        //         {
        //             x.checked=true;
        //         }
        // })
       
      
    }

    render() {
      
        return (
            <div className="PrintArea">

              <form >
              <Row>
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
                                //   onClick= {this.props.handleCheckboxChange}
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
                  
                <div id="message" style={{fontSize:30, marginTop:10, textAlign:'justify'}}> Note: Please drop the printed ballot paper in the <b>{this.props.postName} ballot box</b>.</div>               
              </Col>
              <Col span={3}></Col>

              </Row>
              <br />
              </form>
             
            </div>
        );
    }
}

export default PrintExecutiveBallot;