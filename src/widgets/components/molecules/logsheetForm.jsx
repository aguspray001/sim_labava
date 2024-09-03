import { Button, Card, Checkbox, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import InputForm from "../InputForm";
import { SelectInput } from "../SelectForm";

export default function LogsheetForm({
  onChangeLogsheet,
  packingLine,
  feedCode,
  poNumbers,
  counterResult,
}) {
  const [binFrom, setBinFrom] = useState([]);
  const [valueInputBinForm, setValueInputBinForm] = useState("");

  const storeLocData = [
    {
      value: 1,
      name: "LP",
    },
  ];
  const resultCategoryData = [
    {
      value: 1,
      name: "Ayakan",
    },
    {
      value: 2,
      name: "Olahan",
    },
  ];
  const weightPerBagData = [
    {
      value: 1,
      name: "1Kg",
    },
    {
      value: 2,
      name: "50Kg",
    },
  ];
  const binFromData = [
    {
      value: 1,
      name: "BP51_1",
      packing_id: 1,
    },
    {
      value: 2,
      name: "BP51_2",
      packing_id: 1,
    },
    {
      value: 3,
      name: "BP51_3",
      packing_id: 1,
    },
    {
      value: 4,
      name: "BP51_4",
      packing_id: 1,
    },
    {
      value: 5,
      name: "BP52_1",
      packing_id: 2,
    },
    {
      value: 6,
      name: "BP52_2",
      packing_id: 2,
    },
    {
      value: 7,
      name: "BP52_3",
      packing_id: 2,
    },
    {
      value: 8,
      name: "BP52_4",
      packing_id: 2,
    },
    {
      value: 9,
      name: "BP53_1",
      packing_id: 3,
    },
    {
      value: 10,
      name: "BP53_2",
      packing_id: 3,
    },
    {
      value: 11,
      name: "BP53_3",
      packing_id: 3,
    },
    {
      value: 12,
      name: "BP53_4",
      packing_id: 3,
    },
    {
      value: 13,
      name: "BP54_1",
      packing_id: 4,
    },
    {
      value: 14,
      name: "BP54_2",
      packing_id: 4,
    },
    {
      value: 15,
      name: "BP54_3",
      packing_id: 4,
    },
    {
      value: 16,
      name: "BP54_4",
      packing_id: 4,
    },
  ];

  return (
    <Card color="transparent" shadow={false}>
      <form className="mt-[45rem] mb-2 w-max -ml-5">
        <div className="mb-1 flex flex-row justify-between items-start flex-auto">
          <div className="flex flex-col justify-center items-center gap-2 mr-4">
            <div className="flex flex-col items-start w-full">
              <p className="text-sm">Start Time:</p>
              <input
                className="border border-blue-gray-400 p-2 w-full rounded-md"
                aria-label="Time"
                type="time"
                label="start"
                placeholder="start"
                name="start"
                onChange={onChangeLogsheet}
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <p className="text-sm">Finish Time:</p>
              <input
                className="border border-blue-gray-400 p-2 w-full rounded-md"
                aria-label="Time"
                type="time"
                label="finish"
                placeholder="finish"
                name="finish"
                onChange={onChangeLogsheet}
              />
            </div>
            <InputForm
              name={"duration"}
              title={"Duration"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <SelectInput
              name={"feed_no"}
              label={"Select Feed Code"}
              onChange={onChangeLogsheet}
              data={feedCode?.data?.data?.data || []}
            />
            <SelectInput
              name={"po_no"}
              label={"Select PO Number"}
              onChange={onChangeLogsheet}
              data={poNumbers?.data?.data?.data || []}
            />
            <InputForm
              name={"total_tonage"}
              title={"Total Tonage"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <InputForm
              name={"id_bin"}
              title={"Bin From"}
              placeholder={""}
              onChange={onChangeLogsheet}
              dropdown={true}
              value={valueInputBinForm}
              disabled={true}
            />
            <div className="w-full h-fit border border-gray-400 rounded-lg shadow-lg p-2">
              {binFromData
                ?.filter((v, k) => {
                  return v.packing_id == packingLine;
                })
                .map((v, k) => (
                  <label
                    key={k}
                    htmlFor="item-3"
                    className="flex cursor-pointer items-center gap-2 p-2 text-sm"
                  >
                    <Checkbox
                      ripple={false}
                      id="item-3"
                      containerProps={{ className: "p-0" }}
                      className="hover:before:content-none"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setBinFrom((binFrom) => [
                            ...new Set([...binFrom, v.name]),
                          ]);
                        } else {
                          const index = binFrom.indexOf(v?.name);
                          if (index > -1) {
                            binFrom.splice(index, 1);
                          }
                        }
                      }}
                    />
                    {v.name}
                  </label>
                ))}
              <Button
                color="blue"
                onClick={() => {
                  onChangeLogsheet({
                    target: { name: "id_bin", value: binFrom.toString() },
                  });
                  setValueInputBinForm(binFrom.toString());
                }}
              >
                Lock Bin
              </Button>
            </div>
            <SelectInput
              data={weightPerBagData}
              name={"weight_per_bag"}
              label={"Weight per Bag"}
              onChange={onChangeLogsheet}
            />
            <InputForm
              name={"counter_start"}
              title={"Counter Start (Bag)"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <InputForm
              name={"counter_finish"}
              title={"Counter Finish (Bag)"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <InputForm
              name={"counter_result"}
              title={"Counter Result (Bag)"}
              placeholder={""}
              onChange={onChangeLogsheet}
              value={counterResult}
              disabled={true}
            />
            <InputForm
              name={"remnant"}
              title={"Sisa (Kg)"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <InputForm
              name={"counter_failure"}
              title={"Counter Failure (Bag)"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <InputForm
              name={"package_problem"}
              title={"Package Problem (Bag)"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <InputForm
              name={"ori_sack_usage"}
              title={"Original Sack Usage (Bag)"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <Textarea
              name={"note"}
              variant="outlined"
              label="Note"
              onChange={onChangeLogsheet}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-5">
            <InputForm
              name={"total_cucian"}
              title={"Total Cucian (Bag)"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <InputForm
              name={"total_wbt"}
              title={"Total Wholebag (Bag)"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <InputForm
              name={"total_repro"}
              title={"Total RFeed (Bag)"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <InputForm
              name={"total_hold"}
              title={"Total Hold (Bag)"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <InputForm
              name={"feed_no_ori"}
              title={"Feed Code Ori"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <InputForm
              name={"po_no_ori"}
              title={"PO Number Ori"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <InputForm
              name={"kode_label"}
              title={"Kode Label"}
              placeholder={""}
              onChange={onChangeLogsheet}
            />
            <SelectInput
              name={"store_loc"}
              label={"Store Loc"}
              onChange={onChangeLogsheet}
              data={storeLocData}
            />
            <SelectInput
              name={"category"}
              label={"Hasil Produk"}
              onChange={onChangeLogsheet}
              data={resultCategoryData}
            />
          </div>
        </div>
      </form>
    </Card>
  );
}
