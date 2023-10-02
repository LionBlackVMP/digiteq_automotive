import React from "react";
import style from "./../../Footer.module.scss";

const MenuList = () => {
  return (
    <div className={style.footer_menu}>
      {" "}
      <ul className={style.footer_menu_list}>
        <li className={style.item_title}>
          <a href="">Services</a>
        </li>
        <li className={style.item}>
          <a href="">Mobility of the future</a>
        </li>
        <li className={style.item}>
          <a href="">Development at software and system level</a>
        </li>
        <li className={style.item}>
          <a href="">Testing</a>
        </li>
      </ul>
      <ul className={style.footer_menu_list}>
        <li className={style.item_title}>
          <a href="">Products</a>
        </li>
        <li className={style.item}>
          <a href="">Video Capture</a>
        </li>
        <li className={style.item}>
          <a href="">Simulators</a>
        </li>{" "}
        <li className={style.item}>
          <a href="">Test stands</a>
        </li>{" "}
        <li className={style.item}>
          <a href="">Test Suitcases</a>
        </li>
      </ul>
      <ul className={style.footer_menu_list}>
        <li className={style.item_title}>
          {" "}
          <a href="">Company</a>
        </li>
        <li className={style.item}>
          <a href="">About us</a>
        </li>{" "}
        <li className={style.item}>
          <a href="">Innovations</a>
        </li>{" "}
        <li className={style.item}>
          <a href="">Career</a>
        </li>{" "}
        <li className={style.item}>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
