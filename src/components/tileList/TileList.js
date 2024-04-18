import React from "react";
import {Tile} from '../tile/Tile.js'
export const TileList = ({list}) => {
  console.log('Tile List mounted')
  return (
    <>
   {list.map((item) => <Tile listObj={item} key={item.name}/>)}
   </>
  );
};
