import react from "react";
import {Link} from 'react-router-dom';
import './header.style.scss';
import { connect } from "react-redux";
import {ReactComponent as Logo} from '../../assests/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header=({currentUser})=>(
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
           
        </div>
    </div>
);
const mapStateToprops=state=>({
    currentUser:state.user.currentUser
});
export default connect(mapStateToprops)(Header);