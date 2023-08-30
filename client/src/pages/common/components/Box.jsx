import React, { useState } from 'react';
import { AiTwotoneStar as Star } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { editDesc } from '../../../core/functions/common';
import skeletonCss from "../css/skeleton.module.css"

const Box = ({ data, toCart }) => {
  const { title, price, items } = data;

  let desc = editDesc(items);

  return (
    <div className="border rounded hover:shadow-xl  h-fit hover:shadow-slate-300 duration-200 hover:-translate-y-[2px]">
      <div className="relative flex flex-col">
        <Link to={`/detail/${data._id}`} className="borderb">
          <div className={"w-full h-[200px] max-lg:h-[300px] overflow-hidden relative " + skeletonCss.element}>
            <img src={items[0].img} className="object-cover rounded-t w-full h-full cursor-pointer" />
          </div>
        </Link>
        <span className="absolute top-3 right-3 bg-white rounded-2xl p-1 flex place-items-center gap-1 font-semibold">
          <Star className="text-yellow-500" />
          4.7 (391)
        </span>
      </div>

      <div className="w-full text-center my-2">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p>{desc}</p>
      </div>

      <div className="flex justify-between mt-2 text-large">
        <div className="grow py-2 text-center font-bold">${price}</div>
        <Link
          to={`/detail/${data._id}`}
          className="grow py-2 text-center font-semibold duration-100 text-redd hover:text-red-400"
        >
          View details
        </Link>
        <button
          onClick={() => {
            toCart(data);
          }}
          className="grow py-2 text-center font-semibold duration-100 bg-redd hover:bg-red-700 text-white rounded-tl rounded-br"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Box;