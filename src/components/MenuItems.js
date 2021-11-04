const MenuItems = (props) => {
  return (
    <li>
      <a href={props.itemLink}>{props.itemName}</a>
    </li>
  );
};

export default MenuItems;
