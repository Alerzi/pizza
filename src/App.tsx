import React from 'react';
import './App.css';
import {Header} from "@app/common/components/header/header.component"
import {MenuItem} from "@app/modules/menu/menu-item/menuItem.component"
import {MenuList} from "@app/modules/menu/menu-list/menuList.component"

export const App = () => {
  return (
   <div>
    <h1 className="app">react</h1>
    <Header />
    {/* <MenuItem imagePath="2.jpg" weight={555} price={215} title="Pizza Papperoni" 
      ingredients="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ratione odio ipsum itaque quae nam?" 
    /> */}
    <MenuList />
   </div>
  );
}

