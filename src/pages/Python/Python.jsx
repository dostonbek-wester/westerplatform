import React from "react";
import "./python.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import BirinchiDars from "../../components/BirinchiDars/BirinchiDars";
// import IkkinchiDars from "../../components/IkkinchiDars/Ikkinchidars";

const Python = () => {
  return (
    <div className="Python">
      <Header />
      <div className="bigBox">
        <Sidebar />
        <div className="VideoInfo">
          <BirinchiDars/>
          {/* <IkkinchiDars/> */}
        </div>
      </div>
    </div>
  );
};

export default Python;
