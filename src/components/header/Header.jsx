import React from "react";
import logo from "./../../assets/imgs/logo.svg";
import styles from "./Header.module.scss";

import { useState } from "react";
import SubMenu from "./subMenu/SubMenu";
const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const scroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <SubMenu handleClick={handleClick} scroll={scroll} />
      <header className={styles.header}>
        <div className={styles.container}>
          {" "}
          <div className={styles.header_body}>
            {" "}
            <div className={styles.logo}>
              <a href="#" className={styles.picture}>
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div
              className={
                isActive
                  ? `${styles.burger + " " + styles._active}`
                  : styles.burger
              }
              onClick={handleClick}
            >
              <span></span>
            </div>
            <nav
              className={
                isActive ? `${styles.menu + " " + styles._active}` : styles.menu
              }
            >
              <div
                className={
                  isActive
                    ? `${styles.right_menu + " " + styles._active}`
                    : styles.right_menu
                }
                onClick={handleClick}
              >
                <span></span>
              </div>
              <div className={styles.list}>
                <div className={styles.list_texts}>
                  <ul>
                    <li className={styles.link}>
                      <a href="">Home</a>
                    </li>
                    <li className={styles.link}>
                      <a href="">Services</a>
                    </li>
                    <li className={styles.link}>
                      <a href="">Products</a>
                    </li>
                    <li className={styles.link}>
                      <a href="">Innovations</a>
                    </li>
                    <li className={styles.link}>
                      <a href="">About us</a>
                    </li>
                    <li className={styles.link}>
                      <a href="">20 years</a>
                    </li>
                    <li className={styles.link}>
                      <a href="">Career</a>
                    </li>
                    <li className={styles.link}>
                      <a href="">Contact</a>
                    </li>
                  </ul>
                  <div className={styles.languages}>
                    <a href="">CZ</a>
                    <a href="">EN</a>
                    <a href="">DE</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
