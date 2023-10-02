import style from "./../content/sectionThree-Products/Products.module.scss";
export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1090 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1090, min: 835 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 835, min: 570 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 570, min: 0 },
    items: 1,
  },
};

export const productData = [
  {
    id: 1,
    className: style.item_one,
    title: "Video Capture",
    description:
      "This involves a family of devices for the collection of the data flows between a video source and a car display.",
  },
  {
    id: 2,
    className: style.item_two,
    title: "Simulators",
    description:
      "Technology used to simulate real conditions during testing a laboratory environment.",
  },
  {
    id: 3,
    className: style.item_three,
    title: "Test benches",
    description:
      "Test benches made to test ICAS3 or MIB3 OI and their behaviour. Including customised adaptations.",
  },
  {
    id: 4,
    className: style.item_four,
    title: "Video Convertors",
    description:
      "Video convertors for easy sharing the content and HMI events between a computer and in-car displays.",
  },
  {
    id: 5,
    className: style.item_five,
    title: "Test Suitcases",
    description:
      "Portable solutions intended for testing and simulation of real units.",
  },
  {
    id: 6,
    className: style.item_six,
    title: "Custom design",
    description:
      "We design and develop tools for testing automotive electrics and electronics.",
  },
];
export const ButtonGroup = ({ next, previous }) => {
  return (
    <div className={`carousel-button-group ${style.carousel}`}>
      <button className={style.leftArrow} onClick={() => previous()}></button>
      <button
        className={`${style.rightArrow} ${style.s}`}
        onClick={() => next()}
      ></button>
    </div>
  );
};
