import React from 'react';
import './header.css';

import logotipo from '../../assets/imgs/header/logotipoFluxion.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="text-black p-4">
            <div className="headerBody container mx-auto flex justify-around items-center">
                <img src={logotipo} alt="" />
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="">Soluções</a></li>
                        <li><a href="#" className="">Cases</a></li>
                        <li><a href="#" className="">Insigths</a></li>
                        <li><a href="#" className="">Cultura</a></li>
                        <li><a href="#" className="">Contato</a></li>
                    </ul>
                </nav>
                <button className='letsTalkBtn bg-black text-white px-4 py-2 flex items-center'>
                    Vamos conversar 
                    <span className="ml-2"><FontAwesomeIcon icon={faArrowRight}/></span>
                </button>
            </div>
        </header>
    );
}

export default Header;