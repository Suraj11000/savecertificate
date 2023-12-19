import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./App";
const Home = () => {
  const user = useContext(userContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://savecertificate-front.vercel.app/getposts")
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Fragment>
      <div className="flex mt-5 flex-col items-center">
        {user.email ? (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-4">Welcome Back to SaveCertificate</h1>
            <p className="text-lg px-32">
          SaveCertificate is a secure and centralized platform for managing and showcasing your certificates. Whether you're a student, professional, or enthusiast, easily organize, share, and discover achievements with our intuitive platform.
        </p>
        <p className="text-lg px-32">
          SaveCertificate simplifies the process of managing your certificates. post your certificate from create section and Connect with like-minded individuals and build a network that celebrates your success.
        </p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to SaveCertificate</h1>
            <p className="text-lg px-32">
          SaveCertificate is a secure and centralized platform for managing and showcasing your certificates. Whether you're a student, professional, or enthusiast, easily organize, share, and discover achievements with our intuitive platform.
        </p>
        <p className="text-lg px-32">
          SaveCertificate simplifies the process of managing your certificates. Just Register and add your certificates, and start sharing your accomplishments with the world. Connect with like-minded individuals and build a network that celebrates your success.
        </p>
          </div>
        )}
        <h1 className=" font-bold xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl mt-10 text-xl text-blue-500 underline ">
          Take a look at uploaded Certificates
        </h1>
        {posts.map((post) => (
          <Link
            to={`/post/${post._id}`}
            className=" w-10/12 mt-10 border-2 border-black p-4 flex"
          >
            <div className="flex-wrap xl:flex lg:flex justify-center gap-10 sm:flex-nowrap">
              <img
                src={`https://savecertificate-front.vercel.app/Images/${post.file}`}
                alt=""
                className=" xl:w-[60rem] lg:w-[45rem] md:w-[60rem] sm:w-[60rem] w-[45rem] xl:h-[32rem] lg:h-[31rem] md:h-[30rem] sm:h-[26rem] h-[20rem] overflow-scroll"
              />
              <div className="mt-5 xl:w-8/12 lg:w-7/12 w-full">
                <h2 className=" text-3xl font-semibold uppercase">
                  {post.title}
                </h2>
                <p className=" text-lg xl:w-11/12 lg:w-11/12 w-full xl:h-[14rem] lg:h-[20rem] md:h-[14rem] h-[10rem] overflow-y-auto mt-5 ">
                  {post.description}
                </p>
                <div className=" flex justify-center items-center pt-10">
                  <button className="mt-20 border-2 border-black rounded-xl w-full h-12 bg-blue-500 text-white font-bold hover:border-blue-500 hover:bg-white hover:text-blue-500 ">
                    See more
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
