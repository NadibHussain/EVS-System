import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Breadcrumb, Avatar } from 'antd';
import * as method from '../authentication/Auth'
import logo from '../../src/images/logoAdiva.png'
import '../css/AdminLayout.css'

const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

class AdminLayout extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" >
              {this.state.collapsed ? <Avatar size="large" shape="square" src={logo} style={{ marginLeft:20 }}/> : <div style={{ alignItems:'center', alignContent:'center', textAlign:'center' }}>
              <Avatar size={64} shape="square" src={logo}/>
              <h5 style={{ color:'white' }}> Adiva Lab </h5>
              </div>}
            </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
            <Link to="/admin">
                  <Icon type="search" />
                  <span>
                  Search
                  </span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/admin/VoterList">
                  <Icon type="unordered-list" />
                  <span>
                    Voter List
                  </span>
                </Link>
            </Menu.Item>
            <Menu.Item key="9">
            <Link to="/admin/PresidentList">
                  <Icon type="unordered-list" />
                  <span>
                    President List
                  </span>
                </Link>
            </Menu.Item>
            <Menu.Item key="10">
            <Link to="/admin/ExecutiveList">
                  <Icon type="unordered-list" />
                  <span>
                    Executive List
                  </span>
                </Link>
            </Menu.Item>
              <Menu.Item key="3">
              <Link to="/admin/ResultPresident">
                  <Icon type="line-chart" />
                  <span>
                  President Result
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
              <Link to="/admin/ResultExecutive">
                  <Icon type="line-chart" />
                  <span>
                    Executive Result
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
              <Link to="/admin/register">
                  <Icon type="user-add" />
                  <span>
                    Add New Voter
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="6">
              <Link to="/admin/register/president">
                  <Icon type="user-add" />
                  <span>
                    Add New President
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
              <Link to="/admin/register/executive">
                  <Icon type="user-add" />
                  <span>
                    Add New Executive
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="11">
              <Link to="/admin/voterSlipEnable">
                  <Icon type="user-add" />
                  <span>
                    Voter Slip Enable
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="12">
              <Link to="/admin/BoothList">
                  <Icon type="unordered-list" />
                  <span>
                    Booth List
                  </span>
                </Link>
              </Menu.Item>
              <Menu.Item key="8">
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
          <Header style={{ background: '#fff', padding: 0 }} >
              <span style={{ color:'black',fontSize:20, fontWeight:'bold', marginLeft:20 }}> Admin </span>            
          </Header>
          <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
              </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Developed By Adiva Lab</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default AdminLayout;