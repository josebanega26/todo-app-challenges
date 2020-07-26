import React from 'react';
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg';
import './Button.style.css';
interface ButtonProps {
  label: string;
  handlerClick: Function;
}
const Button = ({ label, handlerClick }: ButtonProps) => {
  return (
    <button
      className="Button--container danger"
      onClick={() => {
        handlerClick();
      }}>
      <DeleteIcon></DeleteIcon>
      {label}
    </button>
  );
};

export default Button;
