import React from "react";
import style from "./../Cover.module.scss";
import logoSkoda from "./../../../../assets/imgs/sectionCover/logo_Skoda.svg";
import cariad from "./../../../../assets/imgs/sectionCover/logo_cariad.svg";
import volkswagen from "./../../../../assets/imgs/sectionCover/logo_volkswagen.svg";
import audi from "./../../../../assets/imgs/sectionCover/logo_audi.svg";
import porsche from "./../../../../assets/imgs/sectionCover/logo_porsche.svg";

const References = () => {
  return (
    <div className={style.references}>
      <div className={style.items}>
        <img className={style.item} src={logoSkoda} alt="" />
        <img className={style.item} src={cariad} alt="" />
        <img className={style.item} src={volkswagen} alt="" />
        <img className={style.item} src={audi} alt="" />
        <img className={style.item} src={porsche} alt="" />
      </div>
      <div className={style.item_text}>
        <a href="">More</a>
      </div>
    </div>
  );
};
export default References;
