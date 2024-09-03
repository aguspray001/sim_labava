import { Input } from "@material-tailwind/react";
import { useState } from "react";

export default function InputForm({
  title,
  name,
  placeholder,
  onChange,
  disabled,
  value,
  dropdown,
}) {
  const [valueInternal, setValueInternal] = useState("");

  return (
    <div className="flex flex-col justify-start w-full">
      <Input
        name={name}
        placeholder={placeholder}
        variant="Outlined"
        label={title}
        onChange={(e) => {
          setValueInternal({
            target: {
              name: e.target.name,
              value: value ? value : e.target.value,
            },
          });
          onChange(e);
        }}
        disabled={disabled}
        value={
          dropdown
            ? value
            : valueInternal !== ""
            ? valueInternal.target.value
            : value
        }
      />
    </div>
  );
}
