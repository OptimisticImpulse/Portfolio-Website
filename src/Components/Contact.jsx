import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/be294bf9-1fd1-4b08-b93f-a3e4581670f9"
        className="flex flex-col w-full mx-11"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - jburdt@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded-sm"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded-sm"
          type="email"
          placeholder="Email"
          name="email"
        ></input>
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-sm"
          placeholder="Message"
          name="message"
          cols="30"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#2563eb] hover-[#eff6ff] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
