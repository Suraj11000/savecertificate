import { Fragment, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { userContext } from "./App";
const Create = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();
  const user = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("email", user.email);
    formData.append("file", file);
    axios
      .post("http://localhost:3001/create", formData)
      .then((res) => {
        if (res.data === "Success") {
          window.location.href = "/";
        }
      })
      .catch((err) => console.log(err));
      alert("Post created successfully")
  };
  return (
    <Fragment>
      <div className=" border-2 border-gray-500 justify-center items-center xl:w-[60rem] lg:w-[60rem] md:w-[40rem] sm:w-[30rem] w-[22rem] mx-auto mt-14 rounded-xl">
        <form
          action=""
          onSubmit={handleSubmit}
          className=" flex flex-col justify-center xl:px-20 lg:px-20 md:px-16 px-5"
        >
          <h2 className="mx-auto flex text-2xl font-semibold p-5">
            Create Post
          </h2>
          <label
            htmlFor="name"
            className="block text-gray-700 text-lg font-bold"
          >
            Title :
          </label>
          <input
            type="text"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            className=" border-2  px-2"
            required
          />
          <label
            htmlFor="name"
            className="block  text-lg font-bold mt-5"
          >
            Description :
          </label>
          <textarea
            name="desc"
            placeholder="Description"
            id="desc"
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
            className=" border-2  px-2"
            required
          ></textarea>
          <input
            type="file"
            placeholder="Select File"
            onChange={(e) => setFile(e.target.files[0])}
            className=" border-2  mt-5 bg-gray-200 font-semibold"
            required
          />
          <button className=" m-10 p-1.5 bg-black text-white font-bold text-xl rounded-full w-full flex mx-auto justify-center hover:bg-white hover:text-black hover:border-2 hover:border-black">
            Create Post
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Create;
