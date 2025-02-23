import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="bg-[#766C40] h-40 mt-24 flex justify-center items-center flex-col">
        <section className="flex gap-5">
          {["Home", "About Us", "Guidelines", "Work Progress", "FAQ", "Login/Register"].map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              <a href="/" className="text-white text-xl">{item}</a>
              {index < 5 && <div className="border-white border h-auto"></div>}
            </div>
          ))}
        </section>

        <div className="border-white border w-2/6 mt-4"></div>

        <section className="flex gap-5 text-white text-xl mt-2">
          <span>Mobile No.: +122 358 48484</span>
          <div className="border-white border h-auto"></div>
          <span>E-mail: pocketlegalaid@gmail.com</span>
        </section>
      </div>
      <div className="h-8 text-center text-xl">
        <p>
          © 2004-2024, <span className="font-semibold">pocketlegalaid.com</span>, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Footer;
