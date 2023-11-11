import React from "react";

const Statisic = ({ value, title }) => {
  return (
    <div className="text-white font-lexenddeca weight-700">
      <div className="text-[25px] font-bold">{value}</div>
      <div className="uppercase text-[11px] font-light text-[#ffffff99]">
        {title}
      </div>
    </div>
  );
};

export default Statisic;
