/* eslint-disable react/prop-types */
import { ProductData } from "../../../data/ProductData";

export default function Tab({ selectedTab, setSelectedTab }) {
  function handleTab(tab) {
    setSelectedTab(tab);
  }
  return (
    <div className="flex w-full flex-col items-center justify-center py-0 sm:flex-row sm:py-6">
      {ProductData.map((tab) => (
        <ul
          key={tab.identifier}
          onClick={() => handleTab(tab.identifier)}
          className={`grid w-full grid-cols-1 items-center justify-center gap-4 border-b-2 py-2 transition-all duration-300 ${selectedTab === tab.identifier ? "border-blue-500" : "border-blue-100"}`}
        >
          <li className="w-full cursor-pointer truncate py-2 text-center font-libre text-[11px] font-medium uppercase hover:border-blue-600 sm:text-xs">
            {tab.identifier}
          </li>
        </ul>
      ))}
    </div>
  );
}
