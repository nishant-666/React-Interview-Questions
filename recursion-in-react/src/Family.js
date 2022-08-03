import React, { useState } from "react";

export default function Family({ familyTree }) {
  const [isVisible, setIsVisible] = useState(false);
  const expand = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ paddingLeft: 10 }}>
      <span onClick={expand}>{familyTree.name}</span>

      {isVisible ? (
        familyTree?.children?.map((child) => {
          return (
            <div style={{ paddingLeft: 10 }}>
              <Family familyTree={child} />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
