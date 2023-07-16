import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from './Library';
import Feed from './Feed';
import Trending from './Trending';
import Player from './Player';
import Favorites from './Favorites';
import Sidebar from "../componetns/sidebar";
import Login from "./Login";
import {setClientToken} from './Spotify';

const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <>
      <Router>
        <div className='h-[100vh] w-[100vw] bg-[#E99D72]  flex'>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/Feed" element={<Feed />} />
            <Route path="/Trending" element={<Trending />} />
            <Route path="/Player" element={<Player />} />
            <Route path="/Favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default Home;