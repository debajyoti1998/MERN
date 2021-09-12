import React from 'react'
import { useSelector} from 'react-redux'

function Home() {
    const user = useSelector((store) => store.auth.user)
    
    return (
        <div>
            welcome {user&& user.name ? user.name  : 'guest'}
        </div>
    )
}

export default Home
