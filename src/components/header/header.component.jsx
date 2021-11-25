import react from "react";
import {Link} from 'react-router-dom';
import './header.style.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {ReactComponent as Logo} from '../../assests/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
const Header=({currentUser,hidden})=>(
    <div className='header'>
        <Link  className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
          <Link  className ='option' to='/shop'>
             SHOP
          </Link>
          <Link  className ='option' to='/shop'>
             CONTACT
          </Link>
           
            {
                currentUser?
                (<div className='option' onClick={()=>auth.signOut()}>Sign Out</div>):
                (<Link className='option' to='/signin'>Sign In</Link>)
               
            }
            <CartIcon/>
           
        </div>
        {
            hidden?null:(<CartDropdown/>)
        }
        
    </div>
);
const mapStateToprops=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});
export default connect(mapStateToprops)(Header);