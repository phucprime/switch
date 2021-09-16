import { useState } from "react";

export const Switch = () => {
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-6";
  return (
    <>
      <div className="flex flex-col justify-center h-screen items-center ">
        {/*   Switch Container */}

        <div
          className={
            (toggle ? "bg-gray-400 " : "bg-green-400 ") +
            "md:w-14 md:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer"
          }
          onClick={() => setToggle(!toggle)}
        >
          {/* Switch */}
          <div
            className={
              (toggle ? "bg-black " : "bg-white ") +
              "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass)
            }
          ></div>
        </div>
        <div className="font-bold my-4">
          Hey! If you liked it consider following me on twitter{" "}
        </div>
        <div className="bg-blue-600 text-white p-4 rounded-md">
          <a href="#" className="twitter-follow-button" data-show-count="false">
            Follow @phucprime
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
      </div>
    </>
  );
};
