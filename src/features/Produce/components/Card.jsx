/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from "react";
import { ProductData } from "../../../data/ProductData";
import useToggle from "../../../hooks/useToggle";
import LazyImage from "../../../components/common/LazyImage";

export default function Card({ key, response }) {
  const [averageRating, setAverageRating] = useState(0);
  const { effect: theme, open, close } = useToggle();

  useEffect(() => {
    const product = getProductFromProductData(response.id);
    if (product) {
      const average = calculateAverageRating(product.reviews);
      setAverageRating(average);
    }
  }, [response]);

  const getProductFromProductData = (productId) => {
    for (const category of ProductData) {
      for (const product of category.products) {
        if (product.id === productId) {
          return product;
        }
      }
    }
    return null;
  };

  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((total, review) => total + review.level, 0);
    return Math.round(sum / reviews.length);
  };

  function colorTheme(label) {
    const bgcolors = {
      one: "009F66",
      two: "0E3A25",
      three: "106EFD",
      four: "FC90B9",
      five: "91B820",
    };

    const colorOneLabels = [
      "Baby Butter",
      "Baby Romaine",
      "Baby Kale",
      "Basil",
      "Cilantro",
      "Parsley",
      "Avocado Ranch",
    ];
    const colorTwoLabels = [
      "Crispy Leaf",
      "Mixed Greens",
      "Spinach",
      "Bok Choy",
      "Zesty Caesar",
      "Balsamic",
    ];
    const colorThreeLabels = ["Spring Mix"];
    const colorFourLabels = ["Berries"];
    const colorFiveLabels = ["Mustard Frills"];

    if (colorOneLabels.includes(label)) {
      return bgcolors.one;
    } else if (colorTwoLabels.includes(label)) {
      return bgcolors.two;
    } else if (colorThreeLabels.includes(label)) {
      return bgcolors.three;
    } else if (colorFourLabels.includes(label)) {
      return bgcolors.four;
    } else if (colorFiveLabels.includes(label)) {
      return bgcolors.five;
    } else {
      return "#0000"; // replace with your default color
    }
  }

  return (
    <Fragment>
      {!theme ? (
        <div
          key={key}
          onClick={open}
          className="group relative flex h-[530px] w-[400px] cursor-pointer flex-col items-center justify-center rounded-lg py-8 transition duration-300 hover:bg-blue-100"
        >
          <div className="flex h-full w-full items-center justify-center overflow-hidden ">
            <img
              src={response.img}
              alt="image"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 py-4">
            <h1 className="font-libre text-2xl font-medium tracking-wide">
              {response.label}
            </h1>
            <p className="h-10 font-mono text-sm uppercase tracking-wider transition ease-in-out group-hover:hidden">
              {response.type}
            </p>
            <div className="flex hidden h-10 flex-row items-center justify-center gap-2 transition ease-in-out group-hover:block">
              <div className="flex flex-row items-center justify-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-5 w-5 ${averageRating > 1 ? "text-green-300" : "text-zinc-300"}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-5 w-5 ${averageRating >= 2 ? "text-green-400" : "text-zinc-300"}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-5 w-5 ${averageRating >= 3 ? "text-green-500" : "text-zinc-300"}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-5 w-5 ${averageRating >= 4 ? "text-green-600" : "text-zinc-300"}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-5 w-5 ${averageRating >= 5 ? "text-green-700" : "text-zinc-300"}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="pl-2 font-montserrat text-lg text-green-900">
                  {averageRating}.0
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`relative flex h-[530px] w-[400px] flex-col items-center justify-center overflow-hidden rounded-lg shadow-sm`}
          style={{
            backgroundColor: `#${colorTheme(response.label)}`,
          }}
        >
          <div className="absolute right-0 top-0 z-20 px-2 py-6">
            <button
              type="button"
              onClick={close}
              className="cursor-pointer rounded-full bg-white bg-opacity-20 p-2 text-white hover:bg-opacity-30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
          </div>
          <img
            src={response.card_shape}
            alt=""
            className={`absolute bottom-0 -z-10 brightness-90 ${response.label === "Avocado Ranch" || response.label === "Balsamic" ? "" : "top-0"}`}
          />
          <div className="flex h-full w-full flex-col items-center justify-between gap-4 px-12 py-14 text-center">
            <div className="font-mono text-sm uppercase text-white">
              {response.type}
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-extrabold text-white">
                {response.label}
              </h1>
              <p className="font-mono text-sm uppercase tracking-tight text-white">
                {response.moto}
              </p>
            </div>
            <p className="mt-10 text-xs font-medium text-zinc-100">
              {response.description}
            </p>
          </div>
          <div className="flex w-full flex-row items-center justify-center gap-2 pb-6 pt-4 font-mono text-xs">
            <button
              type="button"
              className="group relative z-10 overflow-hidden rounded-md border-2 border-white px-4 py-3 text-white transition-all duration-500 hover:text-green-900"
            >
              In store
              <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-0 w-full bg-white transition-all duration-300 group-hover:h-full" />
            </button>
            <button
              type="button"
              className="rounded-md border-2 border-white px-4 py-3 text-white"
            >
              Recipes
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}

{
  /* <div className="relative flex h-[530px] w-[400px] items-end justify-center overflow-hidden rounded-lg bg-[#009F67] shadow-sm">
          <img src={shape} alt="" />
        </div> */
}

{
  /* <div className="relative flex h-[530px] w-[400px] items-end justify-center overflow-hidden rounded-lg bg-[#009F67] shadow-sm">
          <img src={shape02} alt="" />
        </div> */
}
