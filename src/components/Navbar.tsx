import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutLineIcon } from "../assets/svg/personOutlineIcon.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route: string): boolean => {
    if (route === location.pathname) {
      return true;
    }
    return false;
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
              with="36px"
              hieght="36px"
            />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListeItemName"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("offers")}>
            <OfferIcon
              fill={pathMatchRoute("/offers") ? "#2c2c2c" : "#8f8f8f"}
              with="36px"
              hieght="36px"
            />
            <p className={
                pathMatchRoute("/offers")
                  ? "navbarListItemNameActive"
                  : "navbarListeItemName"
              }>Offers</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("profile")}>
            <PersonOutLineIcon
              fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f"}
              with="36px"
              hieght="36px"
            />
            <p className={
                pathMatchRoute("/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListeItemName"
              }>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
