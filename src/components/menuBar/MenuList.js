import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import menuListItems from "../../data/menuListData";
import { Nav, NavList } from "../../styled-components/NavElement";

function MenuList() {
  const itemNameHide = useSelector((state) => state.sidebar.toggle);
  return (
    <Nav center>
      {menuListItems.map((listItem, index) => {
        const { link, name, icon, className } = listItem;
        return (
          <NavList key={index}>
            <NavLink
              exact
              to={`/${link}`}
              className={className}
              style={{ justifyContent: !itemNameHide && "center" }}
              activeClassName="active"
            >
              <span className="menu-icon">{icon}</span>
              {itemNameHide && <span className="menu-name">{name}</span>}
            </NavLink>
          </NavList>
        );
      })}
    </Nav>
  );
}

export default MenuList;
