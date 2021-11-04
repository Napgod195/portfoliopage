import MenuItems from "./MenuItems.js";
import "../styling/Menu.css";

const Menu = () => {
  return (
    <ul className="menu-list">
      <MenuItems itemName={"Home"} itemLink={"#home"} />
      <MenuItems itemName={"About"} itemLink={"#about"} />
      <MenuItems itemName={"Work"} itemLink={"#work"} />
      <MenuItems itemName={"Contact"} itemLink={"#contact"} />
    </ul>
  );
};

export default Menu;
