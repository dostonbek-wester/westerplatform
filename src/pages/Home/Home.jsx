import React from "react";
import "./Home.css";
import { Telegram, YouTube, Facebook } from "@mui/icons-material/";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <div className="homeHeader">
        <a href="https://t.me/sariqdev" target="">
          <h1>AbdulAziz & NASIBILLO</h1>
        </a>
      </div>

      <div className="Container">
        <div className="box">
          <div className="li sariq avatar">
            <a href="">
              <img src="./photos/avatar.png" alt="sariq_dev" />
            </a>
          </div>
          <div className="li havorang">
            <a href="https://t.me/sariqdev" target="">
              <Telegram />
            </a>
          </div>
          <div className="li qizil">
            <a href="https://youtube.com/sariqdev">
              <YouTube />
            </a>
          </div>
          <div className="li siyohrang">
            <a href="https://www.facebook.com/sariqdev">
              <Facebook />
            </a>
          </div>
          <div className="li sariq">
            <NavLink to="/python/dqo">
              {/* <img src="./photos/python.png" alt="" />
               */}
              <img src="./photos/logo.png" alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
