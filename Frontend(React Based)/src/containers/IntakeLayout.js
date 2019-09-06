import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar } from 'antd';
import * as method from '../authentication/Auth';
import logo from '../../src/images/logoAdiva.png'
import '../css/IntakeLayout.css'


const { Header, Sider, Content } = Layout;

class IntakeLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo" >
              {this.state.collapsed ? <Avatar size="large" shape="square" src={logo} style={{ marginLeft:20 }}/> : <div style={{ alignItems:'center', alignContent:'center', textAlign:'center' }}>
              <Avatar size={64} shape="square" src={logo}/>
              <h5 style={{ color:'white' }}> Adiva Lab </h5>
              </div>}
        </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}> 
            <Menu.Item key="1">
              <Link to="/intake">
                  <Icon type="search" />
                  <span>
                  Search
                  </span>
                </Link>
            </Menu.Item>

            <Menu.Item key="2">
            <Link to="/intake/VoterList">
            <Icon type="unordered-list" />
              <span>
               VoterList  
              </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="3">
            <Link to="/intake/getbooth">
            <Icon type="unordered-list" />
              <span>
               Booth List  
              </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="4">
            <Link to="/" onClick={method.logOut}>   
              <Icon type="logout" />
              <span>
              Logout
              </span>
            </Link>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout>

          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            /> 
            <span style={{ color:'black',fontSize:20, fontWeight:'bold' }}> Intake </span>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 750,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default IntakeLayout;