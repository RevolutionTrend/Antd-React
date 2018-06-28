import Dashboard from './dashboard/Dashboard';
import Device from './status/device/Device';
import Ethernet from './status/ethernet/Ethernet';
import RemoteManagement from './support/remote_management/remote_management';
import UpgradeHistory from './support/upgrade/upgrade_history/upgrade_history';
import UpgradeImage from './support/upgrade/upgrade_image/upgrade_image';

const routers = [{
    path: '/dashboard',
    label: 'Dashboard',
    icon: 'home',
    component: Dashboard
}, {
    path: '/status',
    label: 'Status',
    icon: 'dashboard',
    children: [{
        path: '/status/device',
        component: Device,
        label: 'Device'
    }, {
        path: '/status/ethernet',
        component: Ethernet,
        label: 'Ethernet'
    }]
}, {
    path: '/support',
    label: 'Support',
    icon: 'cloud-o',
    children: [{
        path: '/support/remote_management',
        label: 'Remote Management',
        component: RemoteManagement
    }, {
        path: '/support/upgrade',
        label: 'Upgrade',
        children: [{
            path: '/support/upgrade/image',
            label: 'Upgrade Image',
            component: UpgradeImage
        }, {
            path: '/support/upgrade/history',
            label: 'Upgrade History',
            component: UpgradeHistory
        }]
    }]
}];

export default routers;