import { Fragment } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useToggle from "../hooks/useToggle";

export default function Article() {
  const { open: slide, effect: imageLoaded } = useToggle();

  return (
    <Fragment>
      <div
        className={`absolute w-full bg-amber-200 transition-all duration-1000 ${
          imageLoaded ? "h-0" : "h-full"
        }`}
      ></div>
      <LazyLoadImage
        src="https://bowery.co/wp-content/uploads/2020/06/R-D-Center-of-Excellence_Michael-George-Photography-768x1024.jpg"
        alt="Robot factory"
        className={`h-full w-full object-cover ${
          imageLoaded ? "block " : "hidden"
        }`}
        onLoad={slide}
      />
    </Fragment>
  );
}
