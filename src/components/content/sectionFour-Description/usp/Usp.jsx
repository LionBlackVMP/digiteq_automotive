import React from "react";
import style from "./../Description.module.scss";
import partner from "./../../../../assets/imgs/sectionDescription/partner.svg";
import sluzby from "./../../../../assets/imgs/sectionDescription/sluzby.svg";
import team from "./../../../../assets/imgs/sectionDescription/team.svg";
import vyvoj from "./../../../../assets/imgs/sectionDescription/vyvoj.svg";

const Usp = () => {
  return (
    <div className={style.usp}>
      <div className={style.item}>
        {" "}
        <img src={team} alt="" />
        <div className={style.item_text}>
          We are a team of experts within Volkswagen Group.
        </div>
      </div>
      <div className={style.item}>
        {" "}
        <img src={vyvoj} alt="" />
        <div className={style.item_text}>
          We create value added solutions which drive the automotive industry.
        </div>
      </div>
      <div className={style.item}>
        {" "}
        <img src={partner} alt="" />
        <div className={style.item_text}>
          We are a strategic partner for Škoda Auto, CARIAD and Volkswagen.
        </div>
      </div>
      <div className={style.item}>
        {" "}
        <img src={sluzby} alt="" />
        <div className={style.item_text}>
          Responsibility is not just a buzzword to us – we take responsibility
          for our products and are proud of them.
        </div>
      </div>
    </div>
  );
};
export default Usp;
