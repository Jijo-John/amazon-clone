import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Header = () => {

  const handleAuthentication = () => {
    // if (user) {
    //   // auth.signOut();
    // }
  };

  const user = true;

  return (
    <HeaderContainer className="header">
      <Link to="/">
        <img
          className="header__logo"
          alt="logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              <strong>Hello </strong> {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionCart">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__cartCount">
              {/* {cart?.length} */}
              nn
            </span>
          </div>
        </Link>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.nav`

height: 60px;
display: flex;
align-items: center;
background-color: #131921;
position: sticky;
top: 0;
z-index: 100;

.header__logo {
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
}

.header__search {
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
}

.header__searchInput {
  height: 12px;
  padding: 10px;
  width: 100%;
}

.header__searchInput:focus {
  outline: none;
  border: 2px solid;
  border-color: #e99d3b;
  box-shadow: 0 0 6px #e99d3b;
}

.header__searchIcon {
  cursor: pointer;
  padding: 5px;
  height: 22px !important;
  background-color: #e99d3b;
  border: 2px solid;
  border-color: #e99d3b;
}

.header__searchIcon:hover {
  background-color: #e88b11;
}

.header__optionLineOne {
  font-size: 12px;
  font-weight: 400;
}

.header__optionLineTwo {
  font-size: 14px;
  font-weight: 800;
}

.header__optionCart {
  display: flex;
  align-items: center;
  color: white;
  height: 40px;
}

.header__optionCart:hover {
  color: #f39923;
}

.header__cartCount {
  margin-left: 10px;
  margin-right: 10px;
}

.header__nav {
  display: flex;
  justify-content: space-evenly;
}

.header__option {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
}
`;

export default Header;
