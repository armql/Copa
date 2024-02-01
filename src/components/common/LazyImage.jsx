import { Fragment } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useToggle from "../../hooks/useToggle";

export default function LazyImage({ ...props }) {
  const { open: slide, effect: imageLoaded } = useToggle();

  return (
    <Fragment>
      <div
        className={`w-full absolute transition-all duration-1000 bg-amber-200 ${
          imageLoaded ? "h-0" : "h-full"
        }`}
      ></div>
      <LazyLoadImage
        {...props}
        className={`w-full h-full object-cover ${
          imageLoaded ? "block " : "hidden"
        }`}
        onLoad={slide}
      />
    </Fragment>
  );
}
