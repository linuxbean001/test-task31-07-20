import React from 'react';


const Company = React.lazy(() => import('./views/company/Company'));


const routes = [
  { path: '/create-company', name: 'Company', component: Company },
];

export default routes;
