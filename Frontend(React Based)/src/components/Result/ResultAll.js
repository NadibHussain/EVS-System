import React, { Component } from 'react';
import axios from 'axios';
// import ResultLayout from '../../containers/ResultLayout';
import * as url from '../UrlList';
import { Row, Col, Card, Avatar, Spin   } from 'antd';
import posed, { PoseGroup } from 'react-pose';
import shuffle from './suffleDelay';
import '../../css/resultAll.css'
// import { red } from '@material-ui/core/colors';
const { Meta } = Card;

const Item = posed.li({
  // You can make a custom transition for the flip-powered
  // shuffling animation by overriding `flip`. You can even
  // add other properties to animate while the flip animation
  // is in progress. Uncomment the following code to try it out!

//   flip: {
//     scale: 1,
//     transition: {
//       scale: {
//         type: 'spring',
//         velocity: 2
//       },
//       default: {
//         type: 'spring'
//       }
//     }
//   }
});

const presidentListUrl = url.presidentListUrl;
const executiveListUrl = url.executiveListUrl;
const voterListUrl = url.voterListUrl;
class ResultAll extends Component {

  state = {
    resultPresident: [],
    resultExecutive:[],
    voterList:[],
    totalVoter:'',
    voteCasted:'',
    voteRemaining:'',
    percentageOfVoteCasted:'',
    percentageOfVoteRemaining:''

  }

  componentDidMount(){
    // const url = executiveVoteUrl;

    this.interval = setInterval(() => axios.all([this.getPresidentResult(),this.getExecutiveResult(),this.getVoterList()])
      .then(axios.spread((presidentData, executiveData, voterList)=> {
          const president= presidentData.data
          const executive = executiveData.data
          const list = voterList.data
          const totalVoter = list.length

          console.log(totalVoter) 
          console.log(president)
          console.log(executive)
          console.log(totalVoter)
        // Both requests are now complete
          const totalVoteGiven = president.reduce((a, b) => a + b.countOld, 0);
          const voteRemaining = (totalVoter - totalVoteGiven)
          // const totalVoteGivenPercentage = ((totalVoteGiven/totalVoter)*100).toFixed(2)+'%';
          // const voteRemainingPercentage = (100-((totalVoteGiven/totalVoter)*100).toFixed(2))+'%';
          const totalVoteGivenPercentage = Math.round((totalVoteGiven/totalVoter)*100)+'%';
          const voteRemainingPercentage = Math.round(100-((totalVoteGiven/totalVoter)*100))+'%';
          // const voteRemaning = (totalVoter-totalVoteGiven)

          console.log(totalVoteGiven);
          console.log(totalVoteGivenPercentage);
          
          this.setState({
            resultPresident: shuffle(president),
            resultExecutive: shuffle(executive),
            totalVoter:totalVoter,
            voteCasted: totalVoteGiven,
            voteRemaining:voteRemaining,
            percentageOfVoteCasted: totalVoteGivenPercentage,
            percentageOfVoteRemaining : voteRemainingPercentage
          });

      })), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  getPresidentResult() {
    return axios.get(presidentListUrl);
  }
   
  getExecutiveResult() {
    return axios.get(executiveListUrl);
  }
  getVoterList() {
    return axios.get(voterListUrl);
  }



  render() {
    const { resultPresident } = this.state;
    const { resultExecutive } = this.state;

    if(this.state.resultPresident.length>0 && this.state.resultExecutive.length>0){
        return ( 
            <div style={{backgroundColor:'#e6f7ff'}}> 
                {/* President result part */}
                <Row>
                  <Col xs = {20}>
                    <div> 
                        <h4 style={{marginLeft:220,textAlign:'center', textTransform:'uppercase',color:'blue', paddingTop:'10px'}}> President Result ( Upadted every 10 vote )</h4>
                        <ul style={{paddingInlineStart:'10',listStyle:'none',alignItems:'center',justifyContent:'center',flexWrap:'wrap',flexDirection:'row',display:'flex'}}>
                            <PoseGroup>{resultPresident.map(id => <Item key={id.membershipId} > 
                              <Card
                                hoverable
                                style={{ width: 320, height: 115, padding: 0, margin:5, boxShadow:'0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}
                              >
                              <Meta
                                avatar={<div><Avatar src={id.url} shape="square" size={90}/></div>}
                                //   description = {<div><h6 className=" text-success">{id.name}</h6> <p className="font-weight-bold" >{"Id: " + id.membershipId}</p></div>} 
                                  title =  {<Row >
                                                <Col xs={16} ><h6 className="font-weight-bold" >{id.name}</h6><p>{"ID: " + id.membershipId}</p></Col>
                                                <Col xs = {8} className="text-center" ><div style={{ marginTop: 0, padding:0, color:'red', fontSize:30, alignContent:'center'}}>{id.countOld}</div></Col>
                                            </Row> 
                                            } 
                              
                                /> 
                              </Card>
                            </Item>)}
                            
                            </PoseGroup>
                        </ul>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div style={{ color:'blue', matginLeft:0, marginTop:'20px', border:'1px solid blue', padding:'10px', marginRight:'10px', fontWeight:'bold', textTransform:'uppercase'}}>
                          <p style={{marginBottom:0}}>Total voters : <span style={{ color:'red',fontSize:20}}><br />{this.state.totalVoter} </span></p>
                          <p style={{marginBottom:0}}>Vote casted: <span style={{ color:'red',fontSize:20}}><br />{this.state.voteCasted+' ('+this.state.percentageOfVoteCasted + ')'}</span></p>
                          <p style={{marginBottom:0}}>Vote remaining: <span style={{ color:'red',fontSize:20}}><br/>{this.state.voteRemaining+' ('+this.state.percentageOfVoteRemaining+')'} </span></p>
                        </div>
                      </Col>
                    </Row>
                    {/* Executive result part */}
    
                    <div> 
                    <h4 style={{textAlign:'center',textTransform:'uppercase',color:'blue'}}> Executive Result ( Upadted every 10 vote )</h4>
                    <ul style={{padding:'0', listStyle:'none',alignItems:'center',justifyContent:'center',flexWrap:'wrap',flexDirection:'row',display:'flex'}}>
                        <PoseGroup>{resultExecutive.map(id => <Item key={id.membershipId} > 
                          <Card
                            hoverable
                            style={{ width: 320, height: 115, padding: 0, margin:5, boxShadow:'0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'}}
                            // cover={<img alt="example" src= {id.url} style={{ height: 150 }} />}
                          >
                            <Meta
                            avatar={<div><Avatar src={id.url} shape="square" size={90}/></div>}
                            //   description = {<div><h6 className=" text-success">{id.name}</h6> <p className="font-weight-bold" >{"Id: " + id.membershipId}</p></div>} 
                              title =  {<Row>
                                            <Col span={14} ><h6 className="font-weight-bold">{id.name}</h6><p>{"ID: " + id.membershipId}</p></Col>
                                            <Col span = {10} className="text-center" ><div style={{ marginTop: 0, padding:0, color:'red', fontSize:30, alignContent:'center'}}>{id.countOld}</div></Col>
                                        </Row> } 
                          
                            /> 
                          </Card>
                        </Item>)}
                        
                        </PoseGroup>
                    </ul>
                    </div> )
    
                </div> );
    }
    return ( <div className='spinner'><Spin size="large" tip="Loading..." style={{ fontSize: 50 }}/> </div>);

  }
}

export default ResultAll;