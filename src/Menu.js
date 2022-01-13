import React from 'react';
import Item from './Item';
const Menu = ({items}) => {
  return (
    <section className='section-center'>{items.map((item)=>{
      return <Item key={item.id} {...item}/>
    })}</section>

  );
};

export default Menu;
