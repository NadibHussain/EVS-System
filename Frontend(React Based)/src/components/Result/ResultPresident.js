import React, { Component } from 'react';
import axios from 'axios';
// import ResultLayout from './ResultLayout';
import * as url from '../UrlList';
import { Row, Col, Card } from 'antd';
import posed, { PoseGroup } from 'react-pose';
import shuffle from './suffleLive';


const { Meta } = Card;

const Item = posed.li({
  // You can make a custom transition for the flip-powered
  // shuffling animation by overriding `flip`. You can even
  // add other properties to animate while the flip animation
  // is in progress. Uncomment the following code to try it out!

  // flip: {
  //   scale: 1,
  //   transition: {
  //     scale: {
  //       type: 'spring',
  //       velocity: 2
  //     },
  //     default: {
  //       type: 'spring'
  //     }
  //   }
  // }
});

const presidentVoteUrl = url.presidentListUrl;

class ResultPresident extends Component {

  state = {
    result: []
  }

  componentDidMount(){
    const url = presidentVoteUrl;
    // const url = "http://192.168.87.55:8080/list/president";
    this.interval = setInterval(() => axios.get(`${url}`)
      .then(res =>{
        this.setState({
          result: shuffle(res.data)
        });
        console.log(res.data);
    }), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { result } = this.state;

    return (  <div > 
                <h3 style={{textAlign:'center'}}> Election Live Result ( President )</h3>
                <ul style={{listStyle:'none',alignItems:'center',justifyContent:'center',flexWrap:'wrap',flexDirection:'row',display:'flex'}}>
                    <PoseGroup>{result.map(id => <Item key={id.membershipId} > 
                      <Card
                        hoverable
                        style={{ width: 260, height: 350, padding: 0, margin:10 }}
                        cover={<img alt="example" src= {id.url} style={{ height: 150 }} />}
                      >
                      <Meta
                          description = {<div><h6 className=" text-success">{id.name}</h6> <p className="font-weight-bold" >{"Id: " + id.membershipId}</p></div>} 
                          title =  {id.count ?
                                                <Row >
                                                  <Col xs={12}>Total Vote Count:</Col>
                                                  <Col xs = {20} className="text-right display-4 text-danger" ><div style={{ marginTop: 0, padding:0 }}>{id.count}</div></Col>
                                                </Row> 
                                              :
                                              <Row >
                                                  <Col xs={12}>Total Vote Count:</Col>
                                                  <Col xs = {20} className="text-right display-4 text-danger" ><div style={{ marginTop: 0, padding: 0 }}>{id.count}</div></Col>
                                                </Row> 
                                              } 
                      
                        /> 
                      </Card>
                    </Item>)}
                    
                    </PoseGroup>
                </ul>
                </div> );
  }
}

export default ResultPresident;