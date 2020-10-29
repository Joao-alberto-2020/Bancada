import Apidragon from './pages/apidragon/apidragon'
import Git from './pages/github/github'

const config = [
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
