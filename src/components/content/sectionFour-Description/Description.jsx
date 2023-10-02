import React from "react";
import general from "./../../general/general.module.scss";
import style from "./Description.module.scss";
import Title_content from "./title_content/Title_content";
import Usp from "./usp/Usp";

const Description = () => {
  return (
    <section className={style.section}>
      <div className={general.container}>
        <Title_content />
        <Usp />
      </div>
    </section>
  );
};
export default Description;
