import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";

const AboutUs = () => {
  const supportEmail = "savecertificate1@gmail.com";
  const instagramLink =
    "https://instagram.com/___n_i_g_h_t_m_a_r_e___0?igshid=OGQ5ZDc2ODk2ZA==";
  const twitterLink =
    "https://x.com/SurajSh98348163?t=K5xfZCJ4hy6WCk9VSsztiw&s=09";
  const facebookLink = "https://www.facebook.com/savecertificate/";
  const whatsappNumber = "+917378616331";
  return (
    <div className="px-24 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About SaveCertificate</h1>
      <p className="text-lg mb-6">
        Welcome to SaveCertificate! Our platform is dedicated to providing a
        secure and user-friendly space for individuals to store, share, and
        manage their certificates. Whether you're a student, professional, or
        anyone holding valuable certificates, SaveCertificate is here to
        simplify the process for you.
      </p>

      <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
      <p className="text-lg mb-6">
        At SaveCertificate, our mission is to empower individuals by offering a
        centralized and accessible platform for managing certificates. We aim to
        foster a community where users can showcase their achievements, connect
        with others, and easily access their important credentials whenever
        needed.
      </p>

      <h2 className="text-2xl font-bold mb-2">Key Features</h2>
      <ul className="list-disc pl-8 mb-6">
        <li>Store and organize your certificates securely.</li>
        <li>Share your achievements with the SaveCertificate community.</li>
        <li>Connect with other users and explore their certificates.</li>
        <li>Edit and delete your own certificate posts for full control.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Get Started</h2>
      <p className="text-lg mb-6">
        Ready to join SaveCertificate? Sign up today to start storing and
        sharing your certificates. Connect with a like-minded community and
        experience the convenience of managing your credentials in one place.
      </p>

      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p className="text-lg mb-6">
        We value your feedback and questions. If you have any inquiries or
        suggestions, feel free to reach out to us at{" "}
        <a
          href={`mailto:${supportEmail}`}
          className="text-blue-500 hover:underline"
        >
          {supportEmail}
        </a>
        .
      </p>
      <div>
        <h2 className="text-2xl font-bold mb-2">Connect with Us</h2>
        <p className="text-lg mb-6">
          Follow us on social media to stay updated and connected:
        </p>
        <ul className="gap-10 mb-6 flex decoration ">
          <li>
            <a
              href={instagramLink}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className=" text-2xl bg-black rounded-full p-2 text-white hover:bg-white hover:text-black hover:border-2 hover:border-black" size={40}/>
            </a>
          </li>
          <li>
            <a
              href={twitterLink}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuTwitter className=" text-2xl bg-black rounded-full p-2 text-white hover:bg-white hover:text-black hover:border-2 hover:border-black" size={40}/>
            </a>
          </li>
          <li>
            <a
              href={facebookLink}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookCircleLine className=" text-2xl bg-black rounded-full p-2 text-white hover:bg-white hover:text-black hover:border-2 hover:border-black" size={40}/>
            </a>
          </li>
          <li>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="text-green-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className=" text-2xl bg-black rounded-full p-2 text-white hover:bg-white hover:text-black hover:border-2 hover:border-black" size={40}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
