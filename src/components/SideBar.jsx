import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import routers from '../pages/pages.module';
import { changeTitle } from '../redux/action';

const { Sider } = Layout;
const { SubMenu } = Menu;

const getSubmenu = (item) => {
    let itemList = [];
    item.children.forEach((e) => {
        if (e.hasOwnProperty('children')) {
            itemList.push(getSubmenu(e));
        } else {
            itemList.push(getMenuItem(e));
        }
    });
    return (
        <SubMenu key={item.path}
            title={<span><Icon type={item.icon} /><span>{item.label}</span></span>}
            style={{ background: 'transparent' }}
        >
            {itemList}
        </SubMenu>
    );
}

const getMenuItem = (item) => (
    <Menu.Item key={item.path} style={{ background: 'transparent' }}>
        <Link to={item.path}>
            <Icon type={item.icon} />
            <span>{item.label}</span>
        </Link>
    </Menu.Item>
);

const getMenuLabels = list => {
    let obj = {};
    list.forEach(e => {
        if (e.hasOwnProperty('children')) {
            obj = { ...obj, ...getMenuLabels(e.children) };
        } else {
            obj[e.path] = e.label;
        }
    });
    return obj;
}

const pathToLabel = getMenuLabels(routers);

class SideBarClass extends Component {

    constructor(props) {
        super(props);
        let state = {
            defaultSelectedKeys: ['/dashboard'],
            openKeys: []
        }
        const pathname = window.location.pathname;
        if (pathname !== '/') {
            let openKeys = [];
            let path = pathname;
            while (path.lastIndexOf('/') !== 0) {
                path = path.substring(0, path.lastIndexOf('/'));
                openKeys.push(path);
            }
            state.defaultSelectedKeys = [pathname];
            state.openKeys = openKeys;
        }
        this.state = Object.assign({}, state);
    }

    rootSubmenuKeys = routers.filter(e => e.hasOwnProperty('children')).map(e => e.path);

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    switchPage = ({ key }) => this.props.dispatch(changeTitle(pathToLabel[key]));

    render() {
        const { collapsed } = this.props;
        let menuItems = [];
        routers.forEach((item) => {
            if (item.hasOwnProperty('children')) {
                menuItems.push(getSubmenu(item));
            } else {
                menuItems.push(getMenuItem(item));
            }
        });
        return (
            <Sider trigger={null}
                collapsible collapsed={collapsed}
                width={220}
                style={{ background: '#9ddde2' }}
            >
                <Scrollbars style={{ height: '100%' }}>
                    <Menu theme="light" mode="inline"
                        defaultSelectedKeys={this.state.defaultSelectedKeys}
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        onClick={this.switchPage}
                        style={{ height: 'auto', background: '#9ddde2' }}
                    >{menuItems}</Menu>
                </Scrollbars>
            </Sider>
        );
    }
}

const mapStateToProps = state => {
    return {
        collapsed: state.collapsed,
        title: state.title
    };
}

const SideBar = connect(mapStateToProps)(SideBarClass);
export default SideBar;