import React from 'react';
import { TabInterface } from '../../models/Tab.interface';
import './Tab.style.css';

const Tab = ({ title = 'insert Title', isActived = false }: TabInterface) => {
  return (
    <div>
      <button className="tabs--button">{title}</button>
      {isActived && <hr className="tabs--underline" />}
    </div>
  );
};

export default Tab;
