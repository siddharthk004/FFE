import React from "react";

function Board({img}) {
  return (
    <div className="">
  <img
    src={img}
    alt="Banner"
    className="w-[98vw] max-h-full top-0 object-cover"
  />
</div>
  );
}

export default Board;
