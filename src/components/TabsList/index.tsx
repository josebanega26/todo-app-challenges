import React, { useState } from 'react';
import Tab from '../Tab';
import { TabInterface } from '../../models/Tab.interface';
import './TabList.style.css';

const tabsList: TabInterface[] = [
  { title: 'All', isActived: true },
  { title: 'Active', isActived: false },
  { title: 'Complete', isActived: false },
];
const TabList = () => {
  const [tabsData, setTabsData] = useState<TabInterface[]>(tabsList);
  return (
    <div>
      <div className='tabsList--container'>
        {tabsData.map(({ isActived, title }) => (
          <Tab key={`uid-${title}`} isActived={isActived} title={title}></Tab>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default TabList;
