import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-[92vh] bg-[#0a192f] flex justify-center items-center sm:pt-12 p-4"
    >
      <form
        action="https://getform.io/f/bkkgzrxb"
        method="POST"
        className="flex flex-col max-w-[700px] w-full h-full"
      >
        <div className="pb-8">
          <p className="font-bold text-4xl inline border-b-4 border-pink-700  text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            ahmedfarooqim3@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          required
          rows="4"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-700 hover:border-pink-700 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
