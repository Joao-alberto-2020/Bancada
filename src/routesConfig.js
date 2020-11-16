import Apidragon from './pages/apidragon/apidragon';
import Apidragonform from './pages/apidragon/apidragonform';
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
    { 
        path: '/apidragon/add',
         component: Apidragonform,
        exact: true,
    },
    { 
        path: '/apidragon/edit/:id',
         component: Apidragonform,
        exact: true,
    },
    
]

export default config;
