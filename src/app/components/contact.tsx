import * as React from "react";
import ContactForm from "./SideComponents/contactForm";
import FooterNav from "./SideComponents/FooterNav";

export default function ContactSide() {
  return (
    <main className="px-6 flex flex-col gap-12 bg-black text-white">
      {/* Email Header */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-center md:text-left">
        marcaus25@gmail.com
      </h1>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-56">
        {/* Contact Form */}
        <div className="w-full lg:w-3/4">
          <ContactForm />
        </div>

        {/* Footer Navigation */}
        <div className="w-full lg:w-1/2">
          <FooterNav />
        </div>
      </div>
    </main>
  );
}
