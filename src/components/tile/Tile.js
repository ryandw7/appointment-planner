import React from "react";

export const Tile = ({ listObj }) => {
  console.log("tile mounted");
  return (
    <div className="tile-container">
      {Object.keys(listObj).map((key) => {

        const value = listObj[key];
        console.log(key, value);
        if(typeof value === Object){
          Object.keys(value).map((valueKey) => {
            const valueKeyValue = value[valueKey];
            return <p>{valueKey}: {valueKeyValue}</p>
          }

          )
        }
        return <p>{key}: {value}</p>
      })}
    </div>
  );
};
