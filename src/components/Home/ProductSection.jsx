import { useState } from "react";
import Card from "../../features/Produce/components/Card";
import Tab from "../../features/Produce/components/Tab";
import { ProductData } from "../../data/ProductData";

export default function ProductSection() {
  const [selectedTab, setSelectedTab] = useState("All");

  return (
    <div className="h-full w-full bg-stone-100">
      <div className="flex w-full flex-col items-center justify-center px-0 md:px-[24px] lg:px-[40px] xl:px-[100px]">
        <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {ProductData.filter((data) => data.identifier === selectedTab).map(
          (data) => (
            <div
              key={data.identifier}
              className="flex h-[800px] w-full flex-wrap items-center justify-around gap-12 overflow-hidden py-8"
            >
              {data.products.map((response) => (
                <Card key={response.id} response={response} />
              ))}
            </div>
          ),
        )}
      </div>
    </div>
  );
}
