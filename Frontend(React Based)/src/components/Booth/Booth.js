import React, { Component } from 'react'
import axios from 'axios';
import * as url from '../UrlList';
import { List, Button, Result, Icon, Spin } from 'antd';


const getBoothAccessUrl = url.getBoothAccessUrl;
const setBoothAccessUrl = url.setBoothAccessUrl;

class Booth extends Component {
    _isMounted = false;

    state = {
      boothList: [],
      // ShowData:false,
      Loading:true
    }
  
    componentDidMount(){
      this._isMounted = true;
      const url = getBoothAccessUrl;
      const type= window.localStorage.getItem('usertype')
      this.interval = setInterval(() => axios.get(`${url}`)
        .then(res =>{
          this.setState()
          if (this._isMounted) {
          console.log(type);
          const data = res.data 
          // set data
          this.setState({
            boothList:data,
            Loading: false
          })

          if(type !== "admin"){
            // console.log('adminIn')
            // filter data 
            this.setState(state => ({
              boothList: state.boothList.filter(t => t.assignedTo === type),
              Loading: false
            }));

          }

          // console.log(res.data);
          console.log(this.state.boothList);
        }
      }), 1000);
    }

    componentWillUnmount() {
      this._isMounted = false;
      clearInterval(this.interval);
    }
// Booth Open method
boothEnable(event){

      console.log(event)
      console.log(event.target.value)
      const id = event.target.value;
      const data= {
        "id": id,
        "enable":true
      }
      console.log(id)
      console.log(data)
      axios.post(setBoothAccessUrl, data)
      .then(res=>{
        // console.log(res)
      })
      .catch(err=>{
        console.log(err)
        alert("Sorry, cant reach the server")

      })

    
}
// Booth close method
boothDisable(event){

  console.log(event)
  console.log(event.target.value)
  const id = event.target.value;
  const data= {
    "id": id,
    "enable":false
  }
  console.log(id)
  console.log(data)
  axios.post(setBoothAccessUrl, data)
  .then(res=>{
    console.log(res)
    
  })
  .catch(err=>{
    alert("Sorry, cant reach the server")
  })


}
    render() {
      if(this.state.Loading===false){
        if(this.state.boothList.length>0){
          return (
              <div>
                  <List
                    itemLayout="horizontal"
                    bordered
                    dataSource={this.state.boothList}
                    renderItem={item => {
                          return (<List.Item actions={item.enable === false ? [<Button type="primary" value={item.id} onClick={this.boothEnable}>Open</Button>, <Button type="primary" disabled>Close</Button>] : [<Button type="primary" disabled>Open</Button>,<Button type="danger" value={item.id} onClick={this.boothDisable}>Close</Button>]}>
                                    <List.Item.Meta
                                      title={<div style={{textTransform:'uppercase', fontSize:'24'}}>{item.boothName}</div>}
                                      // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                  </List.Item>)
                    }}
                  />
              </div>
          )
          }

          return (  <Result
            icon={<Icon type="smile" theme="twoTone" />}
            title="Sorry, You have no access to see the BoothList"
          />)
      }
      return ( <div className='spinner'><Spin size="large" tip="Loading..." style={{ fontSize: 50 }}/> </div>);

    }
}

export default Booth;