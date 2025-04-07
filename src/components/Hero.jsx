import React from "react";

const Hero = () => {
  return (
    <div className="bg-black text-white  h-screen max-[600px] ">
      <div className="container h-full flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="max-w-[600px]">
          <h1 className="text-2xl md:text-4xl"> Buy Luxury Cars</h1>
          <p className="my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            deleniti quae fugit aspernatur beatae odio similique, esse impedit
            corrupti veritatis sunt at modi quaerat odit. Beatae fugit nostrum
            placeat commodi.
          </p>
          <button className="bg-white text-black rounded-sm h-[30px] w-[120px] cursor-pointer">
            {" "}
            Shop Now
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1545061371-98a8355c9c0d?q=80&w=2768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cars"
          className="hidden md:block w-[500px] rounded-sm object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
