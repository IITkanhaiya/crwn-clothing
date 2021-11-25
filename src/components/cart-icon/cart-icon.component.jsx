import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";


import './cart-icon.style.scss';
const CartIcon=({toggleCartHidden,itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
       <ShoppingIcon className='shopping-icon'/>
       <span className='item-count'>{itemCount}</span>
    </div>
);
const mapDispatchToprops=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
});
const mapStateToProps=createStructuredSelector({
    itemCount:selectCartItemsCount
});
export default connect(mapStateToProps,mapDispatchToprops)(CartIcon);