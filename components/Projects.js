import React from "react";
import minesweeper from "../public/minesweeper.png";
import Image from "next/image";



const Projects = () => {
  return (
    <div className="font-mono">
      <h1 className="text-2xl text-center mb-8 underline">things that i have built</h1>
      <div className="max-w-lg  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
        <div className="md:flex">
          <div className="h-60 flex-shrink-0">
            <Image
              width={400}
              height={250}
              src={minesweeper}
            />
          </div>
          <div className="p-8">
            <div className="tracking-wide text-lg text-gray-900 font-bold">
              MineSweeper In React
            </div>
            <hr className="mt-2 w-3/4"/>
            <p className="mt-5 text-gray-500">
              Left click to reveal cell.
              Right click to flag the cell(that you don't want to reveal, you are guessing, it might have mines).
              You will win if non-mines reveal become zero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
