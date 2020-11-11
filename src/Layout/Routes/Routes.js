import React from 'react';
import Loadable from 'react-loadable';



import Spinner from '../../helpers/Spinner/Spinner'



export const Dashboard = Loadable ({
    loader: () => import('../../Views/Home/Home'),
    loading:()=> <Spinner  />,
});

export const Train = Loadable ({
    loader: () => import('../../Views/Train/Train'),
    loading:()=> <Spinner  />,
});

export const Flight = Loadable ({
    loader: () => import('../../Views/Flight/Flight'),
    loading:()=> <Spinner  />,
});

export const Reports = Loadable ({
    loader: () => import('../../Views/Report/Report.js'),
    loading:()=> <Spinner  />,
});
export const Profile = Loadable ({
    loader: () => import('../../Views/Profile/Profile.js'),
    loading:()=> <Spinner  />,
});

