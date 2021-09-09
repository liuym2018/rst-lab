// import './header.css';
import { Link } from 'react-router-dom';
import React from 'react';

const MeanuItems = (props) => {
    const handleClick = () => props.onClick(props.index);

    return <Link to={`/${props.value}`}>
        <div className={props.isActive ? 'active' : ''} >
            <li className="nav" onClick={handleClick}>
                {props.name}
            </li>
        </div>
    </Link>
}

export default MeanuItems;