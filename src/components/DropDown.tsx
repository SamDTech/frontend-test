import React, { useRef } from "react";

import { useDetectOutsideClick } from "../hooks/useDetectOutsideClick";

interface Options {
  label: string;
  value: number;
}

interface DropDownProps {
  options: Options[];
  label: string;
}

const DropDown: React.FC<DropDownProps> = ({ options, label }) => {
  const dropdownRef = useRef(null);

  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="container">
     
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>{label}</span>
        </button>
        <select
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
          onChange={onClick}
        >
          {options &&
            options.map((val) => (
              <option key={val.label} value={JSON.stringify(val)}>
               {val.label}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
