import React from "react";

const Item = ({
  accesory,
  classname,
  name,
}: {
  accesory: string;
  classname: string;
  name: string;
}) => {
  return (
    <div className={`absolute ${classname} text-4xl font-bold text-blue-400`}>
      {accesory == name ? (
        ""
      ) : (
        <img
          alt={accesory}
          src={`/images/${name}/${accesory}.png`}
          className={"object-contain"}
        />
      )}
    </div>
  );
};

export default Item;
