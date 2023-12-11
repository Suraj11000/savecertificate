import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import { createContext } from "react";
import axios from "axios";
import Create from "./Create";
import Post from "./Post";
import Editpost from "./EditPost";
import About from "./About";
import Contact from "./Contact";

export const userContext = createContext();

const App = () => {
  const [user, setUser] = useState({});
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((user) => {
        setUser(user.data);
      },[])
      .catch((err) => console.log(err));
  });
  return (
    <userContext.Provider value={user}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create/>}/>
          <Route path="/aboutus" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path={`/post/:id`} element={<Post/>}/>
          <Route path={`editpost/:id`} element={<Editpost/>}/>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
};

export default App;
