import React from 'react';
import './header.styles.scss';

import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';


const Header = ({currentUser}) => (
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
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link to='/signin'>SIGN IN</Link>
            } 
        </div>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
    </div>
)

export default Header;

