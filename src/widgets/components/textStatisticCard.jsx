import { Typography } from "@material-tailwind/react";
import React from "react";

export default function TextStatisticCard({ title, value }) {
  return (
    <div className="flex flex-row justify-between gap-2">
      <p className="font-light text-sm text-white">{title}:</p>
      <p className="font-light text-sm text-white">
        {value.length >= 0 ? value.split(",") : value}
      </p>
    </div>
  );
}
