import { Link, useLocation } from 'react-router-dom'

import "../../assets/css/index.css";

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'



const SidebarItem = props => {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const Sidebar = () => {
    const location = useLocation();

    const activeItem = sidebar_items.findIndex(item => item.route === location.pathname)

    const logoImagePath = '/assets/images/logo-hd.png';
    
    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logoImagePath} alt="company logo" />
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
