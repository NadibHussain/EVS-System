import React, { Component  } from 'react';
import axios from 'axios';
import PresidentBallotLayout from './PresidentBallotLayout';
import * as url from '../../../UrlList';
import Zoom from 'react-reveal/Zoom';
import ExecutiveBallot from '../Executive/ExecutiveBallot'
// import ReactToPrint from "react-to-print";

class PresidentBallot extends Component {

  componentDidMount(){
// disable browser back button
    // window.history.pushState(null, document.title, window.location.href);
    // window.addEventListener('popstate', function (event){
    //     window.history.pushState(null, document.title,  window.location.href);
    // });
// --------

    const getUrl = url.presidentListUrl
    axios.get(getUrl)
      .then(res =>{
        const data = res.data
        const sortData= data.sort((a, b) =>{
          return a.name.localeCompare(b.name);
        });
        
        this.setState({
          data: sortData
        });

        // console.log(sortData)        
        // console.log(this.state.data)
        // console.log(this.state.voters)
        // console.log(res.data);

      })
      .catch(error=>{
        console.log(error)
      })

  }

    state = {
        count:0,
        checked: false,
        newComponent:false,
        vote:'',
        data:[],
        dataHeader:[
            {
                title: 'Sl. No.',
                name:'Name',
                image:'Photo',
                icon:"icon"
              }
        ]
    }
    
    handleCheckboxChange=(e)=> {

        const value = e.target.value
        const checked = this.state.checked
        const prevCount= this.state.count
        if(e.target!=null)
        {
          document.getElementById(e.target.id).checked=true;
        }
      this.setState({
          checked:!checked
      })
        if(e.target.checked){ 
          this.setState({
            vote: value,
            count: prevCount+1
          })
        }
        else{
          this.setState({
            vote:'',
            count: prevCount-1

          })
        }
        console.log(this.state.vote)
        // if(this.state.count===1){document.getElementById('button').scrollIntoView({ behavior: 'smooth'})}
      }


    handlesubmit = (e) =>{
        // e.preventDefault()
        // post method
      const headers = {
        'Content-Type': 'application/json',
      }
      const data= JSON.stringify(this.state.vote)
      console.log(data)
      axios.post(url.presidentVoteUrl, data, {headers:headers})
        .then(res=>{
          // return console.log(res)
          if(res.status===200){
          console.log("successs")
          // 
          // document.getElementById('button').style.display = 'none';
          // document.getElementById('message').style.display='block';
          
          window.print()
          
          this.settimeout(this.setState({
            newComponent:true
          }),200)

          // this.setState({
          //   newComponent:true
          // })
        }
        })
        .catch(err=>{
          console.log(err)
          // const message = 'Error Occured';
          // setMessage(message)
          // return handleClick()
        })
    }



    render() {
        if(this.state.newComponent===true){
          return (<ExecutiveBallot />)
        }
        return (
           <Zoom>
           <PresidentBallotLayout 
                    ref={el => (this.componentRef = el)}
                    method={this.componentRef}
                    dataHeader={this.state.dataHeader}
                    data ={this.state.data}
                    handleCheckboxChange={this.handleCheckboxChange}
                    vote={this.state.vote}
                    handlesubmit={this.handlesubmit}
                    count={this.state.count}
                    postName='president'
                    />
          </Zoom>
        );
    }
}

export default PresidentBallot;

