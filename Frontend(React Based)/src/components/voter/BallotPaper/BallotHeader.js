import React, { Component } from 'react';
import { Layout, Row, Col, Card, Avatar  } from 'antd';
import logo from '../../../logo/logo.png';
// import QRCode  from 'qrcode.react'

class BallotHeader extends Component {
    state={
        // profile:JSON.parse(this.props.profile)
    }
    render() {
        // const profile = JSON.stringify(this.props.profile)
        
        return (
            <div style={{ marginTop:10, marginBottom: 10 }}>
            <Layout>            

            {/*-----------Logo , Name, Election Year Bind in a div------------------------------*/}
            <Row style={{backgroundColor: 'white'}}>
                    {/* <Col span={3}></Col> */}
                    <Col span={6} >
                        <Avatar src={logo} shape="square" size={64} style={{ display:'flex', marginLeft:'auto', marginRight:'auto'}}> </Avatar>
                    </Col>
                    <Col span={12} style={{textAlign: 'center', fontSize:12}}>
                        {/* <div> ALL COMMUNITY CLUB LTD. </div> */}
                        <div style={{textTransform:'uppercase', fontWeight:'bold', padding:5}}>
                            <div> Baridhara Cosmopolitan Club </div>
                            <div> Election For the Year 2018-2019 </div>  
                            {/* <br /> */}
                            <div> BALLOT PAPER </div>
                            <div> CANDIDATE FOR THE OFFICE OF {this.props.post} COMMITTEE </div>
                        </div>
                    </Col>

                    <Col span={1}></Col>

                    <Col span={4}>
                      {/* {this.state.profile.membershipId} */}

                      {/* <QRCode value={`name:${this.state.profile.name}\n membershipId:${this.state.profile.membershipId}`} size={90} /> */}
                    </Col>

                    <Col span={1}></Col>

            </Row>

            <Row>
                {/* <Col span={3}></Col> */}
                <Col span={24}>
                    <Card >
                        <span id="movingtext" style={{color: 'red', fontWeight: 'bold', textDecoration: 'underline', marginLeft: '15px',marginBottom:10}}>
                        {/* <b> INSTRUCTION: </b> */}
                        INSTRUCTION:
                        </span>
                        <Row style={{ fontSize:16, fontWeight:'bold'}}>
                        <Col span={24}>
                        <ul style={{}}>
                        {/* <li><b>Please vote for total  10  candidate only. </b></li>
                        <li><b> Scroll down to watch the full ballot paper. </b></li>                   
                        <li><b> Press on cross (X) mark to vote for your candidate or again press for change your vote. </b> Any other marking is invalid. </li>
                        <li><b> Press confirm button to confirm your vote. Confirm button will be showed automatically after your selection. </b></li>
                        <li><b> Collect the printed copy of your voted ballot paper from printer after confirmation  and drop it to the ballot box. </b></li> */}
                            <li> Choose {this.props.select} of {this.props.totalCandidate} candidates  </li>
                            <li> Touch inside the red box to choose your desired candidate  </li> 
                            {this.props.totalCandidate>3 ? <li>Swipe up using touch to see all candidates </li>: ''}

                            
                        {/* <h2 style={{textAlign:'center', textTransform:'uppercase'}}>{this.props.select}</h2> */}
                        </ul>
                        </Col>
                        
                        
                        </Row>
                        {/* <b><span style={{color: 'red', marginLeft: '15px'}}> Attention: </span> After pressing on confirm button you can't be able to change your vote. </b> */}
                    </Card>
                </Col>
                {/* <Col span={6}></Col> */}
            </Row>

            
            </Layout>
            </div>
        );
    }
}

export default BallotHeader; 