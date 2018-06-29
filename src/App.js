import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';

import SideBar from './components/SideBar';
import PageHeader from './components/PageHeader';
import CustomRouter from './router';

import './App.css';

const { Footer, Content } = Layout

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ height: '100vh' }}>
          <SideBar />
          <Layout>
            <PageHeader />
            <Content><CustomRouter /></Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
