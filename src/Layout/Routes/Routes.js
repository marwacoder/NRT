import React from 'react';
import Loadable from 'react-loadable';



import Spinner from '../../helpers/Spinner/Spinner'


const styleProps ={
    color: '#00854D',
    height:50,
    width:50,
    className:'spinner-background-opt',
}


const Dashboard = Loadable ({
    loader: () => import('../../Views/Home/Home'),
    loading:()=> <Spinner {...styleProps} />,
});

const Train = Loadable ({
    loader: () => import('../../Views/Train/Train'),
    loading:()=> <Spinner {...styleProps} />,
});

const Flight = Loadable ({
    loader: () => import('../../Views/Flight/Flight'),
    loading:()=> <Spinner {...styleProps} />,
});

const routes = [
    {path:'/',exact: true, name:"Dashboard", component:Dashboard },
    { path: '/train',  name: "Train", component: Train },
    { path: '/flight',  name: "Flight", component: Flight },
     
];

export default routes;