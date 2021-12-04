import react from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton=({price})=>
{
    const onToken=token=>{
        console.log(token);
        alert('Payment Successful');
    }
    const priceForStripe=price*100;
    const publishableKey='pk_test_51K2xTiSCYY1WfvezEVFvY8bLcmWNvQ88T8THzwYAUmWrqBJBCL1pMxwyj7EA2DLuzu2WdbIqRXsTASj8ggyT7ZSw00dLx6Kz8Q';
    return (
        <StripeCheckout label='Pay Now' name='CRWN CLOTHING LTD.'  billingAddress shippingAddress image='' description={`your total is $${price}`} 
        amount={priceForStripe}
        panelLabel='Pay Now' 
        token={onToken}
        stripeKey={publishableKey} />
    );
};
export default StripeCheckoutButton; 