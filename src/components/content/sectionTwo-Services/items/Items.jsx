import React from "react";
import style from "./../Services.module.scss";

const Items = () => {
  return (
    <div className={style.item_list}>
      <div className={style.item}>
        <a href="">
          <div className={style.item_description}>
            We change the world of mobility, making it more intuitive, safer and
            more comfortable thanks to our solutions. We turn vehicles into
            computers on wheels.
          </div>
          <div className={style.item_title}>Mobility of the future</div>
        </a>
      </div>
      <div className={style.item}>
        {" "}
        <a href="">
          <div className={style.item_description}>
            We develop assistance and comfort systems. We focus on
            pre-development, serial development and integration. We design and
            implement development processes.
          </div>
          <div className={style.item_title}>
            Development at software <br /> and system level
          </div>
        </a>
      </div>
      <div className={style.item}>
        {" "}
        <a href="">
          <div className={style.item_description}>
            We design, improve, put into practice testing methods. By testing,
            we can cover the entire car development process. We use modern
            approaches to testing.
          </div>
          <div className={style.item_title}>Testing</div>
        </a>
      </div>
    </div>
  );
};
export default Items;
