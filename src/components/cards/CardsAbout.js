import React from "react";
import { Link } from "react-router-dom";

export default function CardsAbouT(content, title,subtitle, img, id) {
  return (
    <div className="container">
      <Link to={`/post/${id}`}>
        <img src={img} alt={title} className="w-full h-64 rounded-full " />
        <p className="text-gray-300">{content }</p>
        <h2 className="text-black font-semibold">{title}</h2>
        <h3 className="text-yellow-500">{subtitle}</h3>
      </Link>
    </div>
  );
}
