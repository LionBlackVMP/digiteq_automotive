import React from "react";
import style from "./../Products.module.scss";

const Title_content = () => {
  return (
    <div>
      <h2 className={style.title}>Products for testing electronics</h2>
      <div className={style.title_text}>
        We develop and manufacture our own automated testing tools, including
        tools for simulating real conditions and image data collection. We are
        also able to customise them to meet your needs.
      </div>
      <div className={style.item_text}>
        <a href="">All products</a>
      </div>
    </div>
  );
};
export default Title_content;
