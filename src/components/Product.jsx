import React from "react";
import myphoto from "../assets/imge.jpeg";
import myphoto1 from "../assets/ddd.jpeg"

const Product = () => {
  return (
    <div>
      <img src={myphoto} alt="photo" />
      <img src={myphoto1} alt="photo1" />
    </div>
  );
};

export default Product;
