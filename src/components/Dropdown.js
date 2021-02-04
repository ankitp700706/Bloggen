import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import  {MenuItems} from './MenuItems';
import './Dropdown.css';


function Dropdown ({onClick}){
    const [click, setClick] = useState(false)
    const handleClick =() => setClick(!click)


    return(
        <>
            <ul onClick={handleClick} 
            className={click ? 'dropdown-menu clicked': 'dropdown-menu'}
            >
                {MenuItems.map((items, index) => {
                    return (
                        <li key={index}>
                        <Link className={items.cName}
                        to={items.path}
                        onClick={onClick}
                        >
                            {items.title}
                        </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default Dropdown;