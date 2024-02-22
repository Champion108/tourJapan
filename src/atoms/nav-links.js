import {React} from 'react'
import { FaCaretDown } from 'react-icons/fa';
import './navLinks.css'

export default function logo(props){
        return(
            <div className='nav-link'>
                <a href="#">{props.name}
                <span><FaCaretDown className='icon'/></span></a>
            </div>
        );
}