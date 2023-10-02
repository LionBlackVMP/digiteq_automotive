import React from "react";
import Cover from "./sectionOne-Cover/Cover";
import Services from "./sectionTwo-Services/Services";
import Products from "./sectionThree-Products/Products";
import Description from "./sectionFour-Description/Description";
import Vacancies from "./sectionFive-Vacancies/Vacancies";
import general from "./../general/general.module.scss";
const Content = () => {
  return (
    <main className={general.content}>
      <Cover />
      <Services />
      <Products />
      <Description />
      <Vacancies />
    </main>
  );
};

export default Content;
