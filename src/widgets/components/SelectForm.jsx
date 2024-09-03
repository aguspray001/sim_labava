import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";

export function SelectInput({ name, label, data, onChange, value, disabled }) {
  const [valueInternal, setValueInternal] = useState("");
  return (
    <div className="w-72">
      <Select
        disabled={disabled || false}
        name={name || ""}
        label={label || ""}
        value={value ? value : valueInternal?.target?.value}
        onChange={(val) => {
          setValueInternal({ target: { name: name, value: val } });
          onChange({ target: { name: name, value: val } });
        }}
      >
        {data &&
          data?.map((v, k) => {
            return (
              <Option key={k} value={v?.value?.toString()}>
                {v.name}
              </Option>
            );
          })}
      </Select>
    </div>
  );
}
