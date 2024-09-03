import { Progress } from "@material-tailwind/react";

export default function BinPackingInfo({
  status,
  progress,
  material,
  binNumber,
}) {
  // console.log(status, progress);
  console.log(material);
  const statusComponent = (status) => {
    const {
      auto,
      auto_open,
      man_open,
      open_i,
      auto_close,
      man_close,
      close_i,
    } = status;

    if (auto == "on") {
      if (
        (auto_open == "on" && open_i == "on") ||
        (man_open == "on" && open_i == "on" && open_i != close_i)
      ) {
        return (
          <div className="rotate-[180deg]">
            <img src="/img/bin-packing/open.gif" className="h-4" />
          </div>
        );
      } else if (
        (auto_close == "on" && close_i == "on") ||
        (man_close == "on" && close_i == "on" && open_i != close_i)
      ) {
        return <img src="/img/bin-packing/close.gif" className="h-6" />;
      } else {
        return <img src="/img/bin-packing/filling.gif" className="h-6" />;
      }
    } else {
      return <img src="/img/bin-packing/filling.gif" className="h-6" />;
    }
  };

  return (
    <div className="relative">
      <img
        src={`/img/bin-packing/binpacking_${binNumber}.png`}
        className="h-80"
      />
      {progress &&
        progress?.map((value, key) => {
          switch (key) {
            case 0:
              var hPos = "left-[-1.5rem]";
              var hPosVal = "left-[0.5rem]";
              var hPosMaterial = "left-[0.5rem]";
              break;
            case 1:
              var hPos = "left-[3rem]";
              var hPosVal = "left-[4.8rem]";
              var hPosMaterial = "left-[4.8rem]";
              break;
            case 2:
              var hPos = "left-[7.5rem]";
              var hPosVal = "left-[9.5rem]";
              var hPosMaterial = "left-[9.5rem]";
              break;
            case 3:
              var hPos = "left-[12rem]";
              var hPosVal = "left-[13.8rem]";
              var hPosMaterial = "left-[13.8rem]";
              break;
            case 4:
              var hPos = "left-[17.4rem]";
              var hPosVal = "left-[19rem]";
              var hPosMaterial = "left-[19.5rem]";
              break;
            case 5:
              var hPos = "left-[22rem]";
              var hPosVal = "left-[24rem]";
              var hPosMaterial = "left-[24rem]";
              break;
            case 6:
              var hPos = "left-[26.3rem]";
              var hPosVal = "left-[28.5rem]";
              var hPosMaterial = "left-[28rem] mt-10";
              break;
            case 7:
              var hPos = "left-[30.9rem]";
              var hPosVal = "left-[33rem]";
              var hPosMaterial = "left-[33rem]";
              break;
            default:
              break;
          }
          return (
            (
              <div key={key}>
                <div className={`absolute top-[6.5rem] ${hPos} z-30 w-16`}>
                  <div className="rotate-[-90deg]">
                    <Progress value={value[0]?.toFixed(2)} color="blue" />
                  </div>
                </div>
                <div className={`absolute top-14 ${hPosVal}`}>
                  <p className="font-bold text-blue-600 text-sm">
                    {value[0]?.toFixed(2)}%
                  </p>
                </div>
                <div className={`absolute top-20 ${hPosVal} ml-3 mt-4`}>
                  {statusComponent(status ? status[key] : "")}
                </div>
                <div
                  className={`absolute top-20 ${hPosMaterial} ml-3 mt-4 rotate-90`}
                >
                  <p className="text-sm">
                    {material ? material[key][0]?.trim() : ""}
                  </p>
                </div>
              </div>
            ) ?? <></>
          );
        })}
    </div>
  );
}
