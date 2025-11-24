import React from "react";
import ToyCardBig from "../components/ToyCardBig.jsx";
import { useLoaderData, useParams } from "react-router";
import TryNow from "../components/TryNow.jsx";
import useTitle from "../hooks/useTitle.js";

const ToyDetails = () => {
  const toys = useLoaderData();
  const { id } = useParams();
  useTitle(`${toys[id - 1].toyName}`);
  return (
    <div className="min-h-[calc(100vh-72px)] bg-secondary-content px-10">
      <ToyCardBig toy={toys[id - 1]}></ToyCardBig>
      <TryNow></TryNow>
    </div>
  );
};

export default ToyDetails;
