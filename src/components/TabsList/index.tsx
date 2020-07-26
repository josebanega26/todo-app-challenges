import React from 'react';
import Tab from '../Tab';
import { TabInterface } from '../../models/Tab.interface';
import './TabList.style.css';

interface TabsListProps {
  tabsList: TabInterface[];
  setActiveTabs: Function;
}
const TabList = ({ tabsList, setActiveTabs }: TabsListProps) => {
  return (
    <div>
      <div className="tabsList--container">
        {tabsList.map(({ isActived, title }) => (
          <Tab key={`uid-${title}`} setActiveTab={setActiveTabs} isActived={isActived} title={title}></Tab>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default TabList;
