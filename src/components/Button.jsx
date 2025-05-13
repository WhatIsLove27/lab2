import React from 'react';
import Text from './Text';

const Button = ({ type = "button", onClick, text, className = "", width = "auto",height = "h-[45px]" }) => {
    return (
    <button type={type} onClick={onClick} className={`${height} ${width === "auto" ? "w-auto" : width} rounded-[10px] items-center flex justify-center px-4 transition-colors${className}`}>
        <Text className="text-white font-medium">
            {text}
        </Text>
    </button>
  );
};

export default Button;