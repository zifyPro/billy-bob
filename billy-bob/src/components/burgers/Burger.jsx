"use client";
import React, { useEffect, useState } from "react";
import Cards from "../cards/Cards";
import { useDispatch, useSelector } from "react-redux";

const Burgers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const product = useSelector((state) => state?.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHamburguesas());
  }, []);

  return (
    <>
      <div>
        {/* <div >
          <button
            onClick={() => {
              setFilter("comida");
            }}
          >
            Burgers
          </button>
          <button
            onClick={() => setFilter("promos")}
            className="bg-slate-800 hover:bg-slate-700 text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic "
          >
            promos
          </button>
          <button
            onClick={() => setFilter("bebida")}
            className="bg-slate-800 hover:bg-slate-700 text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic "
          >
            Bebidas
          </button>
        </div> */}
        {/* {isLoading ? (
          <div className=" mt-48 flex flex-col items-center h-[65vh]">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : ( */}
        <div>
          <Cards product={product} />
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Burgers;
