import { NavLink } from 'react-router-dom';

import style from './Navbar.module.css'
function NavItems(props){
    return (
        <li className="nav-item">
                <NavLink exact to={props.link} activeClassName={style.navActive} className="nav-link" style={{color: 'white'}}>
                    {props.name}
                </NavLink>
        </li>
    );
}

export default function Navbar(){
    return (
        <div className={style.navContainer}>
            <div className={style.navContent}>
                <ul className="nav flex-column">
                    <NavItems link='/' name='Keepers'/>
                    {/* <NavItems link='/playlists' name='Playlists'/> */}
                    <NavItems link='/new' name='New'/>
                    <NavItems link='/filter' name='Filter'/>
                </ul>
            </div>
        </div>
    );
}