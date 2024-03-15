import React from 'react';

interface ButtonProps {
  btn_text: string;
}

const Button: React.FC<ButtonProps> = ({ btn_text }) => {
  return (
    <button className="bg-gradient-to-r from-purple-600 to-[#009286]  rounded-full cursor-pointer hover:animate-pulse py-2 px-10  text-white font-bold text-lg">
      {btn_text}
    </button>
  );
};

export default Button;
