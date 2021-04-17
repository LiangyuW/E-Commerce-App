
import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import CollectionItem from '../collection-item/collection-item.component';
import {auth} from '../../firebase/firebase.utils';

const Header=({currentUser})=> (

    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='options' to='/shop'>
                ORDER
            </Link>
            <Link className='options' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser? 
                (<div className='option' onClick={()=> auth.signOut()}> SIGN OUT </div>)
                :
                (<Link className='option' to='/signin'> SIGN IN </Link>)
            }
        </div>
    </div>
)

export default Header;