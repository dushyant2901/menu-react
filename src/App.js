import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { categories } from "./menucategories";
function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterCategory = (category) => {
    if (category === "All") {
      return setMenuItems(items);
    }

    const updatedMenuItems = items.filter((item) => {
      return item.category === category;
    });

    setMenuItems(updatedMenuItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
      <h2>Our Menu</h2>
      <div className="underline"></div></div>
      <Categories categories={categories} filterCategory={filterCategory} />
      <Menu items={menuItems} /></section>
    </main>
  );
}

export default App;
