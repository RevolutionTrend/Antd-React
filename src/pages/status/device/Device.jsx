import React, { Component } from 'react';
import { Table, Icon } from 'antd';

import { fetchData } from '../../../service/utils';

export default class Device extends Component {

    state = {
        deviceList: []
    }

    componentWillMount() {
        fetchData('GET', 'device_table.cmd').then(list => {
            if (Array.isArray(list)) {
                for (let i = 0; i < list.length; i++) {
                    list[i].key = i;
                }
                this.setState({
                    deviceList: list
                });
            }
        });
    }

    render() {
        const columns = [{
            title: '图标',
            dataIndex: 'icon',
            render: () => {
                return {
                    children: <Icon type="laptop" />
                };
            }
        }, {
            title: '设备名称',
            dataIndex: 'deviceName'
        }, {
            title: 'IP地址',
            dataIndex: 'ipAddress'
        }, {
            title: 'MAC地址',
            dataIndex: 'macAddress'
        }, {
            title: '所属组',
            dataIndex: 'group'
        }, {
            title: '连接方式',
            dataIndex: 'interfaceType',
            colSpan: 2,
            render: (value) => {
                return {
                    children: value === 'lan' ? <Icon type="usb" /> : <Icon type="wifi" />
                };
            }
        }, {
            title: '连接方式说明',
            dataIndex: '',
            colSpan: 0,
            render: (value) => {
                return {
                    children: value === 'lan' ? 'LAN' : 'WiFi'
                };
            }
        }, {
            title: '当前状态',
            dataIndex: 'isActive',
            render: (value) => {
                return {
                    children: value ? 'ON' : 'OFF'
                };
            }
        }, {
            title: '操作',
            dataIndex: ''
        }];
        return (
            <div className="panel-body">
                <span className="info">This list below displays all devices connected to your Local Area Network(LAN) and main wireless network with the connection type.</span>
                <button className="btn btn-primary">Refresh</button>
                <Table columns={columns} dataSource={this.state.deviceList} />
            </div>
        );
    }
}