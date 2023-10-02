import React from "react";
import style from "./Cover.module.scss";

import general from "./../../general/general.module.scss";
import References from "./references/References";
import Title_content from "./title_content/Title_content";

const Cover = () => {
  return (
    <section className={style.section}>
      <div className={general.container}>
        <Title_content />
        <References />
      </div>
    </section>
  );
};
export default Cover;
