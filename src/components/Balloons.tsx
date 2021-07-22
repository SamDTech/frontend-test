import React, { useState } from "react";



const Balloons : React.FC<{element: string}> = ( {element} ) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >

      {!isShown && <span>{element}</span>}
      {isShown && (
        <div className="balloon-container">
          <div className="balloon" style={{ backgroundColor: "green" }}></div>
        </div>
      )}
    </div>
  );
};

export default Balloons;
