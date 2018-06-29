import React, { Component } from 'react';

import { fetchData } from '../../../service/utils';

export default class Device extends Component {

    componentWillMount() {
        fetchData('GET', 'device_table.cmd').then(res => {
            console.log(res);
        });
    }

    render() {
        return (
            <span>This is status/Device page.</span>
        );
    }
}