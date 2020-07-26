import React from 'react';
import { TabInterface } from '../../models/Tab.interface';
import './Tab.style.css';

type TabProps = TabInterface & { setActiveTab: Function };
const Tab = ({ title = 'insert Title', isActived = false, setActiveTab }: TabProps) => {
  const handlerClick = () => {
    setActiveTab((tabs: TabInterface[]) =>
      tabs.map((tab) =>
        tab.title === title
          ? {
              ...tab,
              isActived: true
            }
          : { ...tab, isActived: false }
      )
    );
  };
  return (
    <div>
      <button onClick={handlerClick} className="tabs--button">
        {title}
      </button>
      {isActived && <hr className="tabs--underline" />}
    </div>
  );
};

export default Tab;
