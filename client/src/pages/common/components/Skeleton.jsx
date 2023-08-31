import React, { useState } from 'react';
import { AiTwotoneStar as Star } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { editDesc } from '../../../core/functions/common';
import css from "../css/skeleton.module.css"

const Skeleton = () => {

  return (
    <div className={" rounded h-fit  duration-200 "}>
      <div className="relative flex flex-col">
        <div className={"rounded "+css.element}>
          <div className="w-full h-[200px]  max-lg:h-[300px] b overflow-hidden">
            <div className="object-cover rounded-t w-full h-full cursor-pointer" />
          </div>
        </div>
        <span className={"absolute top-3 right-3 rounded-2xl p-1 flex place-items-center gap-1  " + css.element}>
          <Star className="text-gray-500 " />
          {/* 4.7 (391) */}
        </span>
      </div>

      <div className="w-full text-center my-1">
        <h4 className={"text-lg font-semibold bg-gray-200  rounded py-3 " + css.element}></h4>
        <p className={'rounded py-3 w-2/3 my-1 ' +css.element}></p>
      </div>

      <div className="flex mt-2 text-large gap-3">
        <div className={"grow py-4 rounded " + css.element}></div>
        <div
          className={"grow py-4 rounded text-center font-semibold duration-100 " + css.element}
        >
        </div> 
        <div className={"grow py-4 text-center font-semibold duration-100 text-white rounded " + css.element}>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;