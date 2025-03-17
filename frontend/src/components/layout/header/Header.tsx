import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {

    return (
        <div className='Header'>
            <div>
               
            </div>  
            <div>
                <nav>
                    <NavLink to="/servers/list">Server List</NavLink>
                    <NavLink to="/servers/status/:serverId">Server Status</NavLink>
                </nav>
            </div>          
        </div>
    )
}
