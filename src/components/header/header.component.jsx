
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import CollectionItem from '../collection-item/collection-item.component';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

const Header=({currentUser, hidden})=> (

    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='options' to='/shop'>
                ORDER
            </Link>
            <Link className='options' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser? 
                (<div className='option' onClick={()=> auth.signOut()}> SIGN OUT </div>)
                :
                (<Link className='option' to='/signin'> SIGN IN </Link>)
            }
                <CartIcon />
           
        </div>
        {hidden? null : <CartDropdown />}
    </div>
)


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);