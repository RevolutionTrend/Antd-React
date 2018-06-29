import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux';

import { setCollapsed } from '../redux/action';
import './theme.css';

const { Header } = Layout;

class PageHeaderClass extends Component {

    state = {
        collapsed: false
    }

    toggleSider = () => {
        const collapsed = !this.state.collapsed;
        this.setState({
            collapsed
        });
        this.props.dispatch(setCollapsed(collapsed));
    }

    render() {
        const { title } = this.props;
        return (
            <Header className="header">
                <div className="header-top">
                    <Icon className="header-icon"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggleSider}
                    />
                    <span className="header-title">Ant Design - A UI Design Language</span>
                    <Icon className="header-icon" type="user" />
                </div>
                <div className="header-bottom">{title.toUpperCase()}</div>
            </Header>
        );
    }
}

const mapStateToProps = state => {
    return {
        collapsed: state.collapsed,
        title: state.title
    };
}

const PageHeader = connect(mapStateToProps)(PageHeaderClass);

export default PageHeader;