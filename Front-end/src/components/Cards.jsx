import React from "react";

function Cards({ item }) {
  console.log("Card Item:", item); // Log the item to ensure it's passed correctly

  return (
    <>
      <div className="mt-4 my-3 p-2">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer p-3 border-[2px] badge badge-outline hover:bg-pink-500 text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
