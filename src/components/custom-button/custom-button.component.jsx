import react from "react";
import './custom-button.style.scss';

const CustomButton=({childern,...otherProps})=>(
    <button className='custom-button' {...otherProps}>
        {childern}
    </button>
);
export default CustomButton;