import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: '' },
  { path: '/dashboard', name: 'برنامه‌های من', component: Dashboard },
];

export default routes;
