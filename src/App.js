import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';

import SideBar from './components/SideBar';
import CustomRouter from './router';

import './App.css';

const { Header, Footer, Content } = Layout

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ height: '100vh' }}>
          <SideBar />
          <Layout>
            <Header>Header</Header>
            <Content><CustomRouter /></Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
