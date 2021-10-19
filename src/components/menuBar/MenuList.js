import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import menuListItems from "../../data/menuListData";

function MenuList() {
  const itemNameHide = useSelector((state) => state.sidebar.toggle);
  return (
    <MenuSection className="menu-list">
      <ul>
        {menuListItems.map((listItem, index) => {
          const { link, name, icon, className } = listItem;
          return (
            <li key={index}>
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
            </li>
          );
        })}
      </ul>
    </MenuSection>
  );
}

const MenuSection = styled.div`
  flex: 1;

  ul {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    li {
      display: flex;
      align-items: center;
      transition: 0.5s all ease;

      .menuListItem {
        padding: 0.8em 1em;
        height: 100%;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.textColor.secondary};

        &:hover {
          color: ${({ theme }) => theme.hoverTextColor.primary};
        }
        .menu-icon {
          font-size: 1.5rem;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .menu-name {
          letter-spacing: 1.2px;
          padding-left: 0.8em;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
      .active {
        color: ${({ theme }) => theme.textColor.highlight};
      }
      &:hover {
        background-color: ${({ theme }) => theme.hoverBg.primary};
      }
    }
  }
`;

export default MenuList;
