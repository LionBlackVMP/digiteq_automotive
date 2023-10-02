import React from "react";
import style from "./Services.module.scss";
import general from "./../../general/general.module.scss";
import Items from "./items/Items";
const Services = () => {
  return (
    <section className={style.section}>
      <div className={general.container}>
        <h2 className={style.title}>Our services</h2>
        <div className={style.title_text}>
          We design, develop and test new functionalities of your car.
        </div>
        <Items />
      </div>
    </section>
  );
};
export default Services;
