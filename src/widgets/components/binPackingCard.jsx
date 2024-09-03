import { Card, CardBody } from "@material-tailwind/react";
import React from "react";
import TextStatisticCard from "./textStatisticCard";

export default function BinPackingCard() {
  return (
    <Card className="border border-blue-gray-100 shadow-md bg-blue-gray-400">
      <CardBody className="flex flex-col justify-between p-4 text-right">
        <TextStatisticCard title={"Bin from"} value={"BP230, BP230"} />
        <TextStatisticCard title={"Counter Start"} value={"50 Bag"} />
        <TextStatisticCard title={"Counter Finish"} value={"900 Bag"} />
        <TextStatisticCard title={"Status"} value={"Feeding"} />
      </CardBody>
    </Card>
  );
}
