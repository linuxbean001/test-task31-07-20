import React from 'react';


const Company = React.lazy(() => import('./views/company/Company'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/create-company', name: 'Company', component: Company },
];

export default routes;
