import React from "react";
import general from "./../../../general/general.module.scss";
import style from "./../Description.module.scss";
import inovace from "./../../../../assets/imgs/sectionDescription/descriptionImg/inovace.jpg";
import inovaceTwo from "./../../../../assets/imgs/sectionDescription/descriptionImg/inovaceTwo.jpg";
import vision from "./../../../../assets/imgs/sectionDescription/descriptionImg/vision.jpg";
const Title_content = () => {
  return (
    <div className={style.description}>
      {" "}
      <div className={style.description_content}>
        <h2 className={style.title}>
          Innovations for the future of automotive electronics
        </h2>
        <div className={style.title_text}>
          We have been developing and testing automotive electronic and software
          systems since 2001. We are tremendously proud to be a strategic
          partner for the members of the Volkswagen Group.
        </div>
        <button className={`${general.button} ${style.title_button}`}>
          More about Innovations
        </button>
      </div>
      <div className={style.description_imgs}>
        <img src={vision} alt="vision" />
        <img src={inovaceTwo} alt="inovaceTwo" />
        <img src={inovace} alt="inovace" />
      </div>
    </div>
  );
};
export default Title_content;
