import React from "react";

const Contact = () => {
  return (
    <div className="container py-10">
      <form className="w-full max-w-[600px] mx-auto shadow-lg rounded-lg p-5 flex flex-col gap-5">
        <input type="text" placeholder="Full Name"  className="myinput"/>
        <input type="email" placeholder="email@example.com" className="myinput"/>
        <textarea placeholder="Type your message" className="myinput h-[90px]"></textarea>
        <div className="flex gap-2">
          <input type="checkbox" id="mailing" />
          <label htmlFor="mailing">Join our mailing list</label>
        </div>
        <button type="submit" className="bg-black text-white rounded-lg h-[40px] w-full cursor-pointer"> Send message</button>
      </form>
    </div>
  );
};

export default Contact;
