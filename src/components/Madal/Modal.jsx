import * as React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Data } from "../data/data";
import "./modal.css";
import { Modal, Box } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function MyModal({ open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const [value1, setValue1] = useState("");
  const [SearchedData, setSearchedData] = useState([]);

  function lessons_filter(params, value) {
    for (let i = 0; i < params.length; i++) {
      const lesson = params[i];
      return lesson.title.toLowerCase().includes(value.toLowerCase());
    }
  }

  function Search_Target(value) {
    let filtered = Data.filter((item) => {
      return (
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        lessons_filter(item.lessons, value)
      );
    });

    console.log(filtered);

    setSearchedData(filtered);
  }

  function ToDetail(e,l, item) {
    navigate(l.pathname, { state: item });
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className="search">
            <Search fontSize="small" />
            <input
              type="text"
              placeholder="Search content..."
              onChange={(e) => Search_Target(e.target.value)}
            />
            <h1>{value1}</h1>
          </div>
          {SearchedData.map((item, index) => (
            <div className="RSearches" key={index}>
              <h5>#</h5>
              <div>
                <h5>{item.title}</h5>
                {item.lessons.map((l, i) => (
                  <div className="manzil" key={i}>
                    <NavLink onClick={handleClose} to={{pathname:l.pathname,state:l}} state={l}>{l.title}</NavLink>
                    {/* <Button onClick={() => ToDetail(l, item)}>{l.title}</Button> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
