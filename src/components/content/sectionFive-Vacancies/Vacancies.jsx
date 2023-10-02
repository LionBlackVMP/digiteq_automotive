import React from "react";
import general from "./../../general/general.module.scss";
import style from "./Vacancies.module.scss";
const Vacancies = () => {
  return (
    <section className={style.section}>
      <div className={general.container}>
        <div className={style.text_contain}>
          {" "}
          <h2 className={style.title}>Let´s change the future today</h2>
          <div className={style.title_text}>
            We are growing! And you can grow along with us. We are looking for
            new colleagues who wish to change the future of the car industry.
          </div>
          <button className={`${general.button} ${style.title_button}`}>
            Vacancies
          </button>
        </div>
      </div>
    </section>
  );
};
export default Vacancies;
