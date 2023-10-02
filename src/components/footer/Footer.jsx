import React from "react";
import general from "./../general/general.module.scss";
import style from "./Footer.module.scss";
import Content from "./content/Content";
import Copyright from "./copyright/Copuright";

const Footer = () => {
  return (
    <footer className={style.section}>
      <div className={general.container}>
        <Content />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
