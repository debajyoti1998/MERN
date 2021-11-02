import React from 'react';
import { useSelector} from 'react-redux';
// import {Logout} from './Logout';

function Home() {
    const user = useSelector((store) => store.auth.user)
    
    return (
        <div>
            welcome {user&& user.name ? user.name  : 'guest'}
            {/* {user && user.name ? <Logout/>} */}
        </div>
    )
}

export default Home
