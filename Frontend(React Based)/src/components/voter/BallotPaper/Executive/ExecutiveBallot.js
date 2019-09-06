import React, { Component } from 'react';
import axios from 'axios';
import ExecutiveBallotLayput from './ExecutiveBallotLayout';
import * as url from '../../../UrlList';
import Slide from '@material-ui/core/Slide';
import '../../../../css/ExecutiveBallotLayout.css';
import Zoom from 'react-reveal/Zoom';
import Thanks from '../../../thanks/thanks'



class ExecutiveBallot extends Component {
  componentDidMount(){
// disable browser back button
    // window.history.pushState(null, document.title, window.location.href);
    // window.addEventListener('popstate', function (event){
    //     window.history.pushState(null, document.title,  window.location.href);
    // });
// ---------
    const getUrl = url.executiveListUrl
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
        newComponent:false,
        message:'',
        open:false,
        count:0,
        vote:[],
        data:[],
        dataHeader:[
          {
            title: 'Sl. No.',
            name:'Name',
            image:'Photo',
            icon:"icon"
          },
          {
            title: 'Sl. No.',
            name:'Name',
            image:'Photo',
            icon:"icon"
          }
        ]
    }


      onRemoveItem = i => {
        this.setState(state => {
          const vote = state.vote.filter((item, j) => i !== item);
    
          return {
            vote,
          };
        });
      }

      handleCheckboxChange=(e)=> {
        const value = e.target.value
        console.log(e.type)
        if(e.target!=null && e.type==='contextmenu')
        {
          if(document.getElementById(e.target.id).checked===true){
            document.getElementById(e.target.id).checked = false;
          }
          else{
            document.getElementById(e.target.id).checked = true;
          }
        }

        if(e.target.checked){
            if(this.state.count < 10){
                this.setState(prevState => ({
                    vote: [...prevState.vote, value],
                    count: prevState.count +1 
                  }))
            }
            else {
              document.getElementById('button').scrollIntoView({ behavior: 'smooth'})

                e.target.checked=false
                this.setState({
                    message:"You can vote for 10 candidates"
                })
                return this.snackBarOpen()
            }

        }else{
            this.onRemoveItem(value)
            this.setState(prevState => ({
              count: prevState.count -1 
            }))
          }

          // if(this.state.count===9){
          //   document.getElementById('button').scrollIntoView({ behavior: 'smooth'})
          // }

          console.log(this.state.vote)
          console.log(this.state.count)


      
      }




      handlesubmit = (e) =>{
        // e.preventDefault()
        // post method
      const headers = {
        'Content-Type': 'application/json',
      }
      const data= this.state.vote.toString()
      // const currentLocation = window.location.pathname;

      console.log(data)
      console.log(typeof(data))
      axios.post(url.executiveVoteUrl, data, {headers:headers})
        .then(res=>{
          // const currentLocation = window.location.pathname;
          console.log("successs")
          // hide no print things
          // document.getElementById('button').style.display = 'none';
          // document.getElementById('message').style.display='block';
          // 
        
          // this.props.history.push(`/Thanks`)
          window.print();
          this.settimeout(this.setState({
            newComponent:true
          }),500)

          // this.setState({
          //   newComponent:true
          // })

        })
        .catch(err=>{
          console.log(err)
          // const message = 'Error Occured';
          // setMessage(message)
          // return handleClick()
        })
        return false
    }

// down snack slider method    
TransitionLeft = (props) => {
    return <Slide {...props} direction="right" className="message" id="ballotSliderMessage" />;
  }

  // snackbar close method
  handleClose = () => {
    this.setState({
        open:false
    })
  };
  // snackbar open method 
    snackBarOpen =  () => {
    this.setState({
        open:true
    })
  };
    render() {
        if(this.state.newComponent===true){
          return (<Thanks />)
        }
        return (
          <Zoom>
           <ExecutiveBallotLayput data={this.state.data} 
                                  dataHeader={this.state.dataHeader}
                                  handleCheckboxChange={this.handleCheckboxChange}
                                  onRemoveItem={this.onRemoveItem}
                                  count={this.state.count}
                                  handlesubmit={this.handlesubmit}
                                  handleClose={this.handleClose}
                                  Transition={this.TransitionLeft}
                                  message={this.state.message}
                                  open={this.state.open} 
                                  postName={'executive'}
                                  vote={this.state.vote}
                                  />
          </Zoom>
        );
    }
}

export default ExecutiveBallot;

