import React, { Component } from 'react'
import { Input } from 'antd';
import axios from 'axios';
import * as url from '../UrlList'

const { Search } = Input;


class VoterSlipEnableForm extends Component {
    
enableVoterSlip = (value)=>{
    console.log(value)
        const data={
            id:value,
            enable: false
        }
    console.log(data)

        axios.post(url.enableVote,data)
        .then(res=>{
            if(res.data==='Success'){
              alert("successfull.")
            }else{
              alert("Membership Id not matched.")
            }
        //   console.log(res)
        //   window.location.reload()
        })
        .catch(e=>{
          alert("Sorry, Operation failed.")
          console.log(e)
        })
    }

    disableVoterSlip = (value)=>{
        console.log(value)
            const data={
                id:value,
                enable: true
            }
        console.log(data)
    
            axios.post(url.enableVote,data)
            .then(res=>{
                if(res.data==='Success'){
                  alert("successfull.")
                }else{
                  alert("Membership Id not matched.")
                }
            //   console.log(res)
            //   window.location.reload()
            })
            .catch(e=>{
              alert("Sorry, Operation failed.")
              console.log(e)
            })
        }
    render() {
        return (
            <div>
                <div>
                    <h3> Enable voter slip print </h3>
                    <Search
                        placeholder="Enter membership id"
                        enterButton="Enable"
                        size="large"
                        onSearch={this.enableVoterSlip}
                        style={{ width: 500 }}
                        />
                </div>
                <div style={{marginTop:100}}>
                    <h3> Disable voter slip print </h3>
                    <Search
                        placeholder="Enter membership id"
                        enterButton="Disable"
                        size="large"
                        onSearch={this.disableVoterSlip}
                        style={{ width: 500 }}
                        />
                </div>
            </div>
        )
    }
}

export default VoterSlipEnableForm;