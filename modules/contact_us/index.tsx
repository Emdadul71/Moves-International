"use client";
import React from "react";
import ContactHero from "./@components/hero";
import ContactForm from "./@components/contact_form";
import OfficeAddress from "./@components/office_address";
import ContactMap from "./@components/contact_map";

const ContactUs = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <OfficeAddress />
      <ContactMap />
    </div>
  );
};

export default ContactUs;
