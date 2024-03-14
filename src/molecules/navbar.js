import {React} from 'react'
import Logo from '../atoms/logo'
import Navlink from '../atoms/nav-links'
import { useState } from 'react';
import { TbWorld } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import './navbar.css'
import { FaCaretDown } from 'react-icons/fa';

export default function Navbar(){
    
    const [hght,setHght] = useState(-16)

    function show() {
        if(hght===7.2) setHght(-16);
        else setHght(7.2);
        let elements = document.getElementsByClassName("nav-link");
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.toggle("navlink");
        }
    }
    

   return(
    <div className='Navbar'>
        <div className='coll-nav'>
        <div className='toggle'>
            <button className='toggle-button' onClick={show}>
            <FaBars className='newer'/>
            </button>
        </div>
        <div className='cont1' style={{
            top:`${hght}vh`,
        }}>
            <Navlink name="Destination" ></Navlink>
            <Navlink name="Experience" ></Navlink>
            <Navlink name="Travel" ></Navlink>
        </div>
        <Logo className="head-logo"></Logo>
        <div className='cont2'>
            <a href='#search' className='logolink'><IoMdSearch className="sicon"/></a>
            <a href='#language' className='logolink'><TbWorld className="sicon"/><span><FaCaretDown className='world-dropdown'/></span></a>
        </div>
        </div>
    </div>
   );
};