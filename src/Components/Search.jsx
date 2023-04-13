import React from "react";

function Search() {
  return (
    <div>
      <div className="">
        <input
          type=""
          placeholder="Find your bird"
          className="bg-gray-100 py-1 px-4 w-1/2 rounded-full  mt-4"
        />
      </div>
      <div className="w-full mt-5 flex  gap-5">
        <div className=" flex flex-col bg-gray-100 bg-blend-multiply rounded-xl bg- w-72 h-72">
          <div className="h-3/4">
            <img src="/img/hero_bird.png" alt="" className="h-full w-full" />
          </div>
          <div classNam="h-1/4">
            <p>lorem</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, voluptas.
            </p>
          </div>
        </div>
        <div className=" flex flex-col bg-gray-100 bg-blend-overlay rounded-xl bg- w-72 h-72">
          <div className="h-3/4">
            <img src="/img/hero_bird.png" alt="" className="h-full w-full" />
          </div>
          <div classNam="h-1/4">
            <p>lorem</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, voluptas.
            </p>
          </div>
        </div>
        <div className=" flex flex-col bg-gray-100 bg-blend-multiply rounded-xl bg- w-72 h-72">
          <div className="h-3/4">
            <img src="/img/hero_bird.png" alt="" className="h-full w-full" />
          </div>
          <div classNam="h-1/4">
            <p>lorem</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, voluptas.
            </p>
          </div>
        </div>
        <div className=" flex flex-col bg-gray-100 bg-blend-normal rounded-xl bg- w-72 h-72">
          <div className="h-3/4">
            <img src="/img/hero_bird.png" alt="" className="h-full w-full" />
          </div>
          <div classNam="h-1/4">
            <p>lorem</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, voluptas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
