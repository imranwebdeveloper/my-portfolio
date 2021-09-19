import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import menuListItems from "../../data/menuListData";

function MenuList() {
  const itemNameHide = useSelector((state) => state.sidebar.toggle);
  return (
    <MenuSection className="menu-list">
      <ul>
        {menuListItems.map((listItem, index) => {
          return (
            <li key={index}>
              <Link
                to={listItem.link}
                className={listItem.className}
                style={{ justifyContent: !itemNameHide && "center" }}
              >
                <span className="menu-icon">{listItem.icon}</span>
                {itemNameHide && (
                  <span className="menu-name">{listItem.name}</span>
                )}
              </Link>
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
        color: ${({ theme }) => theme.textColor.primary};
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
      &:hover {
        background-color: ${({ theme }) => theme.hoverBg.primary};
      }
    }
  }
`;

export default MenuList;
