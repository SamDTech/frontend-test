import React from "react";

interface ChipProps {}

const Chip: React.FC<{ avatar: string }> = ({ avatar }) => {
  return (
    <div className="contact">
      <img src={avatar} alt="avatar" width={70} height={90} />
      Ney mar
    </div>
  );
};

export default Chip;
