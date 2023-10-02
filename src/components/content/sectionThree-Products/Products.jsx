import React from "react";
import style from "./Products.module.scss";
import general from "./../../general/general.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./product/Product";
import Title_content from "./title_content/Title_content";
import { ButtonGroup, productData, responsive } from "../../data/state";
const Products = () => {
  const product = productData.map((items) => <Product data={items} />);
  return (
    <section className={style.section}>
      <div className={general.container}>
        <Title_content />
        <div className={style.item_list}>
          <Carousel
            responsive={responsive}
            infinite={true}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
          >
            {product}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default Products;
