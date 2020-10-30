import Apidragon from './pages/apidragon/apidragon';
import Git from './pages/github/github';
import Home from './pages/home/home';

const config = [
    { 
        path: '/',
         component: Home,
        exact: true,
    },
    {
        path: '/Apidragon',
        component: Apidragon,
        exact: true,
    },
    { 
        path: '/Git',
         component: Git,
        exact: true,
    },
    
]

export default config;
