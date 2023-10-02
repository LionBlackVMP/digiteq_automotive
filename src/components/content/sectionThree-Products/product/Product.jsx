import React from "react";
import style from "./../Products.module.scss";

const Product = (props) => {
  return (
    <div>
      <div className={`${style.item} ${props.data.className}`}>
        <div className={style.item_content}>
          <a href="">
            <div className={style.item_description}>
              {props.data.description}
            </div>
            <div className={style.item_title}>{props.data.title}</div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Product;
