import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./App";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const Navigate = useNavigate();
  const user = useContext(userContext);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getpostbyid/" + id)
      .then((result) => setPost(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deletepost/" + id)
      .then((result) => {
        Navigate("/");
      })
      .catch((err) => console.log(err));
      alert("Post Deleted successfully")
  };
  return (
    <Fragment>
      <div>
        <div className=" flex flex-col justify-center items-center pt-5 xl:px-40 lg:px-40 md:px-30 sm:px-10 px-5">
          <img
            src={`http://localhost:3001/Images/${post.file}`}
            alt=""
            className="w-full xl:h-[36rem] lg:h-[36rem] md:h-[28rem] sm:h-[24rem] h-[20rem] shadow-2xl shadow-gray-600"
          />
        </div>
        <div className="xl:px-40 lg:px-40 md:px-30 sm:px-10 px-5 justify-center flex flex-col pt-12">
          <h2 className=" text-3xl font-semibold">
            <span className=" text-3xl font-bold">Title :</span> {post.title}
          </h2>
          <p className="text-xl pt-5">
            <span className=" text-2xl font-semibold">Description :</span>{" "}
            {post.description}
          </p>
        </div>

        <div>
          {user.email === post.email ? (
            <div className="flex items-center gap-20 justify-center p-10">
              <Link
                to={`/editpost/${post._id}`}
                className=" border-2 border-black rounded-full px-10 bg-black text-white font-semibold text-lg hover:bg-white hover:text-black"
              >
                Edit
              </Link>
              <button
                onClick={(e) => handleDelete(post._id)}
                className=" border-2 border-black rounded-full px-10 bg-black text-white font-semibold text-lg hover:bg-white hover:text-black"
              >
                Delete
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Post;
