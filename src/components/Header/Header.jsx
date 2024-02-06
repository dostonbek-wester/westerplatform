import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import MyModal from "../Madal/Modal";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="Header">
        <div className="atHeader">
          <div className="left">
            <img
              src="https://www.clipartmax.com/png/full/434-4343754_python-logo.png"
              alt=""
            />
            <h4>Wester AbdulAziz & NASIBILLO</h4>
          </div>
          <MyModal open={open} setOpen={setOpen} />

          <button className="right" onClick={() => setOpen(true)}>
            <div className="rLeft">
              <SearchIcon />
              <h3>Search</h3>
            </div>
            <div className="rRight">
              <span>⌃</span>
              <span>k</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
