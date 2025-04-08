import React from 'react';
import Text from './Text';

const Button = ({ type="button", onClick, imageStart, text, imageEnd, height, className, width }) => {
    return (
        <>
            <button type={type} onClick={onClick} className={` bg-[#2B322B]  ${height} ${width} rounded-[10px] items-center flex ${className}`}>
                    <div className={`flex gap-3 items-center `}> 
                        <Text text={text} />
                    </div>

                   
            </button>
        </>
    );
};

export default Button;