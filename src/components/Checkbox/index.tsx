import React from 'react';
import { ReactComponent as Checkmark } from '../../assets/icons/done.svg';
import './Checkbox.style.css';
interface CheckboxProps {
  checked: boolean;
}
const Checkbox = ({ checked }: CheckboxProps) => {
  const isChecked = checked ? 'checked' : '';
  return (
    <label className='checkbox--container'>
      <Checkmark className={`checkmark ${isChecked}`}></Checkmark>
    </label>
  );
};

export default Checkbox;
