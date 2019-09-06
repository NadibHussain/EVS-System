import React, { Component } from 'react';
import axios from "axios";
import {Row, Col} from 'react-bootstrap';
import { Result, Empty  } from 'antd';
import CardPrint from '../VoterSlip/CardPrint';
import * as url from '../UrlList'
import SearchForm from "../Form/SearchForm";

const voterListUrl = url.voterListUrl;


class Search extends Component {
  state = {
    details: [],
    datafound:true,
    serverfound:true 
  }

  // here member details method send to user form as props
  getMember = (e) => {
    e.preventDefault();
    const memberid = e.target.elements.memberid.value;
    if (memberid) {
      axios.get(`${voterListUrl}/${memberid}`)
      .then((res) => {
        const details = res.data;
        console.log(details);
        console.log(res);
        this.setState({
          details:''
        })
        this.setState({
          details:details
        })
        
      })
      .catch(err=>{  
        this.setState({
          details:''
        })      
        if(err.response.request.status=== 404){
          this.setState({datafound:false})
        }
        if(err.response.request.status=== 500){
          this.setState({serverfound:false})
        }
    
      })
    } 
  }



//  get whole details of a member/voter
memberdetails(){
  
  const data = this.state.details.membershipId;
  const voteGiven = this.state.details.voteGiven;
    if(data){
      if(voteGiven === false){
      return (<CardPrint 
                  name = {this.state.details.name} 
                  id = {this.state.details.membershipId} 
                  pic = {this.state.details.url}
                  password = {this.state.details.password} 
                  voteGiven = {this.state.details.voteGiven}
                  voteEnable={this.state.details.enable}
                  onChangeSwitch = {this.onChangeSwitch}
                  print = {this.print}/>)
      }
      else{
        alert("You have already casted your vote");
      }
    }

    if(this.state.datafound===false){
      return (<Result
        status="404"
        title="404"
        subTitle="Sorry, Membership Id not found"
      />)
    }
    if(this.state.serverfound===false){
      return(
        <Result
        status="500"
        title="500"
        subTitle="Membership Id not found in server"
        // extra={<Button type="primary">Back Home</Button>}
      />
      )
    }
    return (<div> <Empty  style={{marginTop:200}} /></div>);
}




  render() {
    return (
      <div className="Search">
        <Row >
          <Col xs={6} className = "searcharea" > 
              <SearchForm getMember={this.getMember} style={{marginTop:'50%'}}/> 
          </Col>
          <Col xs={6}>
            <div className="memberdetails">
              {this.memberdetails()}
              {/* {this.state.details.voteGiven===false ? (<CardPrint 
                  name = {this.state.details.name} 
                  id = {this.state.details.membership_id} 
                  pic = {this.state.details.image_url}
                  password = {this.state.details.password} 
                  voteGiven = {this.state.details.vote_given}
                  print = {this.print}/>) : (<NotFoundPage />) } */}
                  
            </div>
          </Col>
        </Row>
      </div>
    );
  }
};

export default Search;
