import React, {Component} from 'react';
import axios from 'axios';
import { Input, Tooltip, Icon, Button, Row, Col } from 'antd';
// import p1 from '../p1.png'
import p2 from '../../images/candidate.png';
import * as url from '../UrlList';


const filedesign = {
  width:'100%',
  margin:'10px'
}
const inputFeild = {
  margin:'10px',
  padding:'5px'
}

const addNewVoterUrl = url.addNewPresidentUrl;
const initialState = {
  voter:{
    name:""
  },
  file:null
}
class AddNewPresident extends Component {

  constructor(props) {

    super(props);
    this.state = initialState;
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleInput = this.handleInput.bind(this);

  }

// file input handle method
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
// Text input handle method
handleInput(e) {
  let value = e.target.value;
  let name = e.target.name;
  this.setState(
    prevState => ({
      voter: {
        ...prevState.voter,
        [name]: value
      }
    }),
    () => console.log(this.state.voter)
  );
}

// Submit method
onFormSubmit(e){
  e.preventDefault()
    const url = addNewVoterUrl;
    const formData = new FormData();
    formData.append('president', JSON.stringify(this.state.voter))
    formData.append('file',this.state.file)
    console.log(formData)
    
    console.log(JSON.stringify(this.state));
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    // return  axios.post(url, formData, config)
    axios.post(url, formData, config)
    .then(res=>{
      console.log(res)
      this.setState(initialState);
      // document.getElementById("files").value = ""
      alert(res.data.message)
      // this.props.history.push(`${this.props.match.path}/`);
        window.location.reload();


    })
    .catch(err=>{
      console.log(err)
      alert("Sorry, Registration failed")

    })
  }

  render() {
    return (
      <div className="container" >
        <Row>
          {/* Column */}      
            <Col span={14}> 
            <img src={p2} width="100%" height="50%" alt="add voter theme img"/>        
            </Col>
          {/* Column */}
            <Col span={10} >
              <form onSubmit={this.onFormSubmit}>
              
                <h1 style = {inputFeild}> Add New President </h1>
                  <div style = {inputFeild}>
                      <label className= "float-left font-weight-bold"> Name </label>
                      <Input
                          name = "name" 
                          value = {this.state.voter.name}
                          onChange = {this.handleInput}
                          placeholder="Enter name"
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          suffix={
                          <Tooltip title="Give full Name">
                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                          </Tooltip>
                          }
                          required
                    />

                  </div>
                  <div style = {inputFeild}>
                    <label className= "float-left font-weight-bold">Membership ID</label>
                    <Input
                        name = "membershipId"
                        value = {this.state.voter.membershipId}
                        onChange = {this.handleInput}
                        placeholder="Enter membership ID"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={
                          <Tooltip title="Membership ID must be unique">
                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                          </Tooltip>
                        }
                        required
                      />
                    </div>

                    <div  style = {inputFeild}>
                      <label className= "float-left font-weight-bold"> Upload a photo</label>
                      <input className= "float-left" style={filedesign} type="file" onChange={this.onChange} accept="image/x-png,image/gif,image/jpeg" required/> 
                    </div>

                    <div style = {inputFeild}>
                    <Button block htmlType="submit"> Add </Button> 
                    </div>
                  {/* <br/><br /> */}
              </form>
            </Col>

          </Row>  
      </div>
   )
  }
}

export default AddNewPresident;