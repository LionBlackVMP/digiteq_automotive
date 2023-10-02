import React from "react";
import logoImg from "./../../../assets/imgs/footer/logo.svg";
import style from "./../Footer.module.scss";
import MenuList from "./menuList/MenuList";
import SocialLinks from "./socialLinks/SocialLinks";

const Content = () => {
  return (
    <div className={style.content}>
      <div className={style.logo}>
        <img src={logoImg} alt="" />
      </div>
      <div className={style.footer_menu}>
        <MenuList />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Content;
