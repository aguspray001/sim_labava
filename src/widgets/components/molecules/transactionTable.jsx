import { logsheetTransactionHeader } from "@/data/logsheet-packing";
import { Typography } from "@material-tailwind/react";
import Pagination from "../paging";

export default function TransactionTable({
  active,
  next,
  prev,
  data,
  setSelectedRow,
  operator,
  kerani,
  supervisor,
  limit,
  lenData,
}) {
  return (
    <div className="flex flex-col">
      <table className="w-full table-auto mb-2 mt-16">
        <thead>
          <tr>
            {logsheetTransactionHeader?.map((el) => (
              <th
                key={el}
                className="border-b border-blue-gray-50 py-3 px-2 text-center"
              >
                <Typography
                  variant="small"
                  className="text-[11px] font-bold uppercase text-black"
                >
                  {el}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((val, key) => {
            const className = "border-b border-blue-gray-50 text-center";
            return (
              <tr
                key={`${val.id_dpm}-${key}`}
                onClick={() => {
                  setSelectedRow(val);
                }}
                className="hover:bg-gray-400 hover:cursor-pointer"
              >
                <td className={className}>
                  <Typography className="text-xs font-semibold text-black">
                    {val.id_dpm}
                  </Typography>
                </td>
                <td className={className}>
                  <Typography className="text-xs font-semibold text-black">
                    {val.date_created}
                  </Typography>
                </td>
                <td className={className}>
                  <Typography className="text-xs font-semibold text-black">
                    {val.id_shift}
                  </Typography>
                </td>
                <td className={className}>
                  <Typography className="text-xs font-semibold text-black">
                    {val.id_device}
                  </Typography>
                </td>
                <td className="border-b border-blue-gray-50 text-center w-1">
                  <Typography className="text-xs font-semibold text-black">
                    {
                      operator
                        ?.filter((v, k) => {
                          return v.value == val.operator;
                        })
                        .map((v, k) => {
                          return v.name;
                        })[0]
                    }
                    {/* {val.operator} */}
                  </Typography>
                </td>
                <td className={"border-b border-blue-gray-50 text-center w-1"}>
                  <Typography className="text-xs font-semibold text-black">
                    {
                      supervisor
                        ?.filter((v, k) => {
                          return v.value == val.supervisor;
                        })
                        .map((v, k) => {
                          return v.name;
                        })[0]
                    }
                    {/* {val.supervisor} */}
                  </Typography>
                </td>
                <td className={className}>
                  <Typography className="text-xs font-semibold text-black">
                    {val.status}
                  </Typography>
                </td>
                <td className={"border-b border-blue-gray-50 text-center w-1"}>
                  <Typography className="text-xs font-semibold text-black">
                    {
                      kerani
                        ?.filter((v, k) => {
                          return v.value == val.kerani_fg;
                        })
                        .map((v, k) => {
                          return v.name;
                        })[0]
                    }
                    {/* {val.kerani_fg} */}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <Pagination
          next={next}
          prev={prev}
          active={active}
          limit={limit}
          lenData={lenData}
        />
      </div>
    </div>
  );
}
