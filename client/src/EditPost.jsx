import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Editpost = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const { id } = useParams();
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3001/editpost/" + id, { title, description })
      .then((res) => {
        if (res.data === "Success") {
          Navigate("/");
        }
      })
      .catch((err) => console.log(err));
    alert("Post Updated successfully");
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/getpostbyid/" + id)
      .then((result) => {
        setTitle(result.data.title);
        setDescription(result.data.description);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Fragment>
      <div className=" border-2 border-gray-500 justify-center items-center xl:w-[60rem] lg:w-[60rem] md:w-[40rem] sm:w-[30rem] w-[22rem] mx-auto mt-14 rounded-xl">
        <form
          action=""
          onSubmit={handleSubmit}
          className=" flex flex-col justify-center xl:px-20 lg:px-20 md:px-16 px-5 mt-5"
        >
          <h2 className=" flex mx-auto text-2xl font-semibold">Edit Post</h2>
          <label
            htmlFor="name"
            className="block text-gray-700 text-lg font-bold mt-5"
          >
            Title :
          </label>
          <input
            type="text"
            value={title}
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            className=" border-2  px-2"
          />
          <label
            htmlFor="name"
            className="block text-gray-700 text-lg font-bold mt-5"
          >
            Description :
          </label>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className=" border-2 px-2"
          ></textarea>
          <button className=" m-10 bg-black text-white w-full flex mx-auto items-center justify-center font-bold h-10 rounded-xl hover:bg-white hover:text-black hover:border-2 hover:border-black">
            Update
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Editpost;
