// src/Card.js
import React from 'react';

const Card = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#556f9f] p-6 bg-white ">
      <img
        className=" mx-auto shadow-md rounded-xl shadow-[#0b0b0d]"
        src={imageSrc}
        alt="Profile"
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 hover:text-[black] mt-2">{description}</p>
      </div>
      <div className="text-center mt-4">
        <button className=" text-blue-600  rounded hover:text-blue-900">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
