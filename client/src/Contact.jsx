import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/contact", { name, email, message })
      .then((res) => Navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mx-auto my-8 xl:px-20 lg:px-20 md:px-16 px-5 border-2 border-gray-500 justify-center items-center xl:w-[60rem] lg:w-[60rem] md:w-[40rem] sm:w-[30rem] w-[22rem] mt-14 rounded-xl">
      <h1 className="text-4xl font-bold mt-4 mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-8">
        Feel free to reach out to us. We would love to hear from you!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 p-2"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 p-2"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full border border-gray-300 p-2"
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 my-5 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
