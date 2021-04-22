import React from 'react';
import './header.styles.scss';

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = () => (
    <div className='header'>
        <div className='options'>
            <Link className='option' to='/shop'>
                English
            </Link>
            <Link className='option' to='/shop'>
                اهدا
            </Link>
            <Link className='option' to='/shop'>
                ارتباط با ما
            </Link>
            <Link className='option' to='/shop'>
                آموزش
            </Link>
            <Link className='option' to='/shop'>
                خذمات
            </Link>
            <Link className='option' to='/shop'>
                مناسبت ها
            </Link>
            <Link className='option' to='/shop'>
                درباه ما
            </Link>
            <Link className='option' to='/shop'>
                خانه
            </Link>
        </div>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
    </div>
)

export default Header;

