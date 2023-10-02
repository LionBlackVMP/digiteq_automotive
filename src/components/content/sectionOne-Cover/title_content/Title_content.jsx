import React from "react";
import style from "./../Cover.module.scss";
import general from "./../../../general/general.module.scss";

const Title_content = () => {
  return (
    <div>
      <h1 className={style.title}>
        We make <br /> car revolution happen
      </h1>
      <div className={style.title_text}>
        We are not only a brand of the future, we are the future <br /> – the
        future of autonomous driving, connectivity, electromobility and
        digitalisation.
      </div>
      <button className={`${general.button} ${style.title_button}`}>
        Our services
      </button>
      <div className={style.title_text_two}>Who we work for</div>
    </div>
  );
};
export default Title_content;
