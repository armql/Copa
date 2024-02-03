import { Link } from "react-router-dom";
import vertical from "../assets/vertical.svg";
import spinach from "../assets/spinach.svg";
import light_spinach from "../assets/light-spinach.svg";
import strawberry from "../assets/strawberry.svg";
import spinach_icon from "../assets/spinach-icon.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Footer() {
  return (
    <footer className="w-full h-full z-10 relative">
      <div className="flex flex-row justify-between xl:px-44 lg:px-36 md:px-4 sm:px-12 px-4 py-48 font-libre text-white">
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-12 w-full justify-between items-center">
          <div className="flex flex-col gap-6">
            <p className="font-medium text-lg">Get the latest and tastiest</p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Email address"
                className="bg-transparent rounded-md px-2 py-2.5 placeholder:text-white text-sm border-2"
              />
              <p className="text-xs font-light">
                Fresh updates on product launches, farm events, and so much
                more.
              </p>
            </div>
            <p>linkedin, x, ig, so on,</p>
          </div>
          <div className="flex flex-row justify-around gap-12 text-base font-medium">
            <div className="flex-row gap-12 flex ">
              <div className="flex flex-col gap-2">
                <Link to="#">Produce</Link>
                <Link to="#">About us</Link>
                <Link to="#">Recipes</Link>
                <Link to="#">Stories</Link>
                <Link to="#">Find in Store</Link>
                <Link to="#">Contact</Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link to="#">Join us</Link>
                <Link to="#">Leadership</Link>
                <Link to="#">Terms of Service</Link>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Support</Link>
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:block hidden">
              <p>Office</p>
              <p className="font-light text-sm">
                151 W 26th St 12th Floor, New York NY 10001
              </p>
              <div className="flex justify-start items-center">
                <p className="text-xs font-light px-2 py-1 rounded-lg text-blue-950 bg-opacity-60 bg-white">
                  View on maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-7 items-end h-full w-full justify-center">
        <div className="w-full h-full relative group overflow-y-clip">
          <LazyLoadImage
            src="https://bowery.co/wp-content/uploads/2023/03/mustard-frills-illustration.svg"
            alt="mustard frills"
            className="w-40 h-40 rotate-12 bottom-10 -left-20 absolute group-hover:rotate-45 transition-all duration-1000"
          />
          <LazyLoadImage
            src={strawberry}
            alt="mustard frills"
            className="w-40 h-40 rotate-45 -bottom-10 -left-10 absolute group-hover:rotate-90 transition-all duration-1000"
          />
          <LazyLoadImage
            src="https://bowery.co/wp-content/uploads/2023/03/mixed-greens-illustration.svg"
            alt="mustard frills"
            className="w-40 h-40 rotate-0 -bottom-10 left-20 absolute group-hover:rotate-12 transition-all duration-1000"
          />
        </div>
        <div className="w-full h-full group relative overflow-y-clip">
          <LazyLoadImage
            src={spinach_icon}
            alt="spinach icon"
            className="w-40 h-40 rotate-12 -bottom-[80px] -left-2 absolute group-hover:rotate-45 transition-all duration-1000 brightness-75"
          />
          <LazyLoadImage
            src={vertical}
            alt="baby kale"
            className="w-40 h-40 -rotate-12 -bottom-[0px] left-10 absolute group-hover:rotate-12 transition-all duration-1000 brightness-75"
          />
          <LazyLoadImage
            src={spinach}
            alt="baby kale"
            className="w-40 h-40 -rotate-12 -bottom-[40px] left-[100px] absolute group-hover:rotate-12 transition-all duration-1000 brightness-75"
          />
        </div>
        <div className="w-full h-full relative group overflow-y-clip">
          <LazyLoadImage
            src="https://bowery.co/wp-content/uploads/2023/03/spring-mix-illustration.svg"
            alt="mustard frills"
            className="w-52 h-52 -rotate-12 -bottom-[100px] left-3 absolute group-hover:rotate-12 transition-all duration-1000 brightness-75"
          />
        </div>
        <div className="w-full h-full relative group overflow-y-clip"></div>
        <div className="w-full h-full relative group overflow-y-clip">
          <LazyLoadImage
            src={light_spinach}
            alt="baby kale"
            className="w-40 h-40 rotate-0 -bottom-[50px] left-0 z-10 absolute group-hover:-rotate-12 transition-all duration-1000 brightness-75"
          />
          <LazyLoadImage
            src="https://bowery.co/wp-content/uploads/2023/03/baby-kale-illustration.svg"
            alt="baby kale"
            className="w-40 h-40 rotate-0 -bottom-[100px] left-32 z-10 absolute group-hover:-rotate-12 transition-all duration-1000 brightness-75"
          />
          <LazyLoadImage
            src="https://bowery.co/wp-content/uploads/2024/01/mustard-green-leaf-2668x3999-5315565-1-683x1024.png"
            alt="baby kale"
            className="w-40 h-40 rotate-0 -bottom-[80px] left-10 z-20 absolute group-hover:-rotate-12 transition-all duration-1000 brightness-75"
          />
        </div>
        <div className="w-full h-full relative group overflow-y-clip">
          <LazyLoadImage
            src={strawberry}
            alt="strawberry"
            className="w-56 h-56 rotate-90 -bottom-24 left-10 absolute group-hover:rotate-[75deg] transition-all duration-1000 brightness-90 z-10"
          />
          <LazyLoadImage
            src={spinach_icon}
            alt="spinach icon"
            className="w-40 h-40 rotate-12 -bottom-[80px] -left-2 absolute group-hover:-rotate-12 transition-all duration-1000 brightness-75"
          />
        </div>
        <div className="w-full h-full relative group overflow-clip">
          <LazyLoadImage
            src="https://bowery.co/wp-content/uploads/2023/03/spring-mix-illustration.svg"
            alt="mustard frills"
            className="w-52 h-52 -rotate-45 bottom-[40px] -right-20 absolute group-hover:-rotate-[65deg] transition-all duration-1000 brightness-75"
          />
          <LazyLoadImage
            src={vertical}
            alt="baby kale"
            className="w-40 h-40 rotate-12 -bottom-[0px] left-0 absolute group-hover:-rotate-12 transition-all duration-1000 brightness-75"
          />
          <LazyLoadImage
            src="https://bowery.co/wp-content/uploads/2023/03/mixed-greens-illustration.svg"
            alt="mustard frills"
            className="w-40 h-40 rotate-0 -bottom-10 left-20 absolute group-hover:-rotate-12 transition-all duration-1000"
          />
          <LazyLoadImage
            src="https://bowery.co/wp-content/uploads/2023/03/mustard-frills-illustration.svg"
            alt="mustard frills"
            className="w-40 h-40 rotate-12 -bottom-20 -left-4 absolute group-hover:-rotate-12 transition-all duration-1000"
          />
        </div>
      </div>
    </footer>
  );
}
