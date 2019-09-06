import React, { Component } from 'react'
import { Table, Input, Button, Icon, Popconfirm } from 'antd';
import Highlighter from 'react-highlight-words';
import axios from 'axios';
import * as url from '../UrlList';
// import { Link } from 'react-router-dom';

const voterListUrl = url.voterListUrl;
const VoterDeleteUrl = url.deleteVoterUrl;


class VoterListForAdmin extends Component {
    state = {
        searchText: '',
        voters:[]
      };

      componentDidMount(){

        axios.get(voterListUrl)
          .then(res =>{
            this.setState({
              voters: res.data
            });
            // console.log(res.data);
            // console.log(this.state.voters)
          })
          .catch(error=>{
            console.log(error)
          })

      }
      getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text => (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        ),
      });
    
      handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
      };
    
      handleDelete = key => {

        axios.delete(`${VoterDeleteUrl}/${key}`);

        const dataSource = [...this.state.voters];
        this.setState({ voters: dataSource.filter(item => item.membershipId !== key) });
        // axios.dele
        // axios.delete(`http://192.168.86.243:8080/delete/${membershipId}`);
        // this.props.history.push('/');
      };
    render() {

        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              width: '30%',
              ...this.getColumnSearchProps('name'),
            },
            {
              title: 'Membership ID',
              dataIndex: 'membershipId',
              key: 'membershipId',
              width: '30%',
              ...this.getColumnSearchProps('membershipId'),
            },
            {
              title: 'Photo',
              dataIndex: 'url',
              key: 'url',
              width: '30%',
              render: (text, record) =>{return <img width={80} height = {80} alt="logo" src= { record.url } />} 

            },
            {
              title: 'Delete',
              dataIndex: 'membershipId',
              key: 'id',
              render: (text, record) =>
                this.state.voters.length >= 1 ? (
                  <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.membershipId)}>
                    <a href="/">Delete</a>
                  </Popconfirm>
                ) : null,
            },
          ];

          return <Table columns={columns} 
                        dataSource={this.state.voters} 
                        rowKey={record => record.membershipId} 
                         />;
    }
}

export default VoterListForAdmin;