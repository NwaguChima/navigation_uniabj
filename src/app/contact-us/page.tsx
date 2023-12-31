import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = ({}) => {
  return (
    <section className="contactUs min-h-[90vh] p-2 pt-12 md:p-6 md:pt-12">
      <h1 className="text-2xl font-bold md:text-3xl">Contact Us</h1>

      <ContactForm />
    </section>
  );
};

export default Page;
