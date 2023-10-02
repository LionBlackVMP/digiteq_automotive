import React from "react";
import style from "./SubMenu.module.scss";
import arrow from "./../../../assets/imgs/arrow.png";
const SubMenu = (props) => {
  return (
    <div className={style.subMenu}>
      <a
        className={
          props.isActive
            ? `${style.burger + " " + style._active}`
            : style.burger
        }
        onClick={props.handleClick}
      >
        <span></span>
      </a>
      <a>
        <div className={style.arrow}>
          <img
            onClick={props.scroll}
            src={arrow}
            alt="arrow
          "
          />
        </div>
      </a>
    </div>
  );
};

export default SubMenu;
