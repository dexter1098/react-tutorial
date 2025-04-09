import React from "react";

const Product = ({ image, price, title, children }) => {
  return (
    <div>
      <img src={image} alt="" />
      <p>{title}</p>
      <p>{price}</p>
      {children}
    </div>
  );
};

const PropsChildren = () => {
  return (
    <div>
      <h1>List of available product</h1>
      <div className="flex gap-3">
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/5331304/1.jpg?5279"
          }
          price={8000}
          title={"Phone"}
        />

        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/3088932/1.jpg?3620"
          }
          price={12000}
          title={"power bank"}
        />
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/3075153/1.jpg?9098"
          }
          price={6000}
          title={"Laptop"}
        >
          <p>Black friday deal</p>
        </Product>
      </div>
    </div>
  );
};

export default PropsChildren;
