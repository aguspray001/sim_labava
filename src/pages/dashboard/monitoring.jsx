import BinPackingCard from "@/widgets/components/binPackingCard";
import BinPackingInfo from "@/widgets/components/binPackingInfo";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Logsheet } from ".";
import { API_PORT, API_URI } from "@/data/api";
import { PackingContext } from "@/context/packingContext";

export function Monitoring() {
  const [binMaterial, setBinMaterial] = useState([]);
  const [binValue, setBinValue] = useState([]);
  const [slidegateStatus, setSlidegateStatus] = useState([
    {
      auto: "off",
      auto_close: "off",
      auto_open: "off",
      close_i: "off",
      man_close: "off",
      man_open: "off",
      open_i: "off",
    },
  ]);
  const { setIsLoading } = useContext(PackingContext);

  const getAllBinLevel = async () => {
    setIsLoading(true);
    axios
      .get(`${API_URI}:${API_PORT}/binpacking/bin-levels/`)
      .then((resp) => {
        setBinValue(resp);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };

  const getMaterialBinPacking = async () => {
    setIsLoading(true);
    axios
      .get(`${API_URI}:${API_PORT}/binpacking/materials/`)
      .then((resp) => {
        setBinMaterial(resp);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };

  const getAllSlidegateStatus = async () => {
    setIsLoading(true);
    axios
      .get(`${API_URI}:${API_PORT}/binpacking/all-sg-status/`)
      .then((resp) => {
        setSlidegateStatus(resp);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };
  // fetch data continously
  useEffect(() => {
    getAllBinLevel();
    getMaterialBinPacking();
    getAllSlidegateStatus();
    const interval = setInterval(() => {
      getAllBinLevel();
      getMaterialBinPacking();
      getAllSlidegateStatus();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="mt-12 mb-10 gap-10">
        <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <Card className="mb-10 overflow-hidden xl:col-span-3 border shadow-xl bg-gray-200 shadow-blue-800">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 flex items-center justify-between p-6"
            >
              <div>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-1 text-center"
                >
                  BIN PACKING MONITORING SYSTEM
                </Typography>
              </div>
            </CardHeader>
            <CardBody className="px-0 pt-0 pb-2">
              <div className="flex flex-row justify-between">
                {/* PACKING 1-2 */}
                <div className="flex flex-col justify-center items-center flex-auto border border-gray rounded-xl m-2 p-4 shadow-xl bg-white">
                  <p className="text-black font-bold mb-4">PACKING 1</p>
                  <div className=" flex flex-row justify-between items-start gap-10 relative">
                    <BinPackingInfo
                      status={slidegateStatus?.data?.data?.data?.slice(0, 8)}
                      progress={binValue?.data?.data?.bin_level?.slice(0, 8)}
                      material={binMaterial?.data?.data?.material_code?.slice(
                        0,
                        8
                      )}
                      binNumber={1}
                    />
                    {/* <div className="absolute bottom-0 right-0">
                      <BinPackingCard />
                    </div> */}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center flex-auto border border-gray rounded-xl m-2 p-4 shadow-xl bg-white">
                  <p className="text-black font-bold mb-4">PACKING 2</p>
                  <div className=" flex flex-row justify-between items-start gap-10 relative">
                    <BinPackingInfo
                      status={slidegateStatus?.data?.data?.data?.slice(8, 16)}
                      progress={binValue?.data?.data?.bin_level?.slice(8, 16)}
                      material={binMaterial?.data?.data?.material_code?.slice(
                        8,
                        16
                      )}
                      binNumber={2}
                    />
                    {/* <div className="absolute bottom-0 right-0">
                      <BinPackingCard />
                    </div> */}
                  </div>
                </div>
              </div>
              {/* PACKING 3-4 */}
              <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-center items-center flex-auto border border-gray rounded-xl m-2 p-4 shadow-xl bg-white">
                  <p className="text-black font-bold mb-4">PACKING 3</p>
                  <div className=" flex flex-row justify-between items-start gap-10 relative">
                    <BinPackingInfo
                      status={slidegateStatus?.data?.data?.data?.slice(16, 24)}
                      progress={binValue?.data?.data?.bin_level?.slice(16, 24)}
                      material={binMaterial?.data?.data?.material_code?.slice(
                        16,
                        24
                      )}
                      binNumber={3}
                    />
                    {/* <div className="absolute bottom-0 right-0">
                      <BinPackingCard />
                    </div> */}
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center flex-auto border border-gray rounded-xl m-2 p-4 shadow-xl bg-white">
                  <p className="text-black font-bold mb-4">PACKING 4</p>
                  <div className=" flex flex-row justify-between items-start gap-10 relative">
                    <BinPackingInfo
                      status={slidegateStatus?.data?.data?.data?.slice(24, 32)}
                      progress={binValue?.data?.data?.bin_level?.slice(24, 32)}
                      material={binMaterial?.data?.data?.material_code?.slice(
                        24,
                        32
                      )}
                      binNumber={4}
                    />
                    {/* <div className="absolute bottom-0 right-0">
                      <BinPackingCard />
                    </div> */}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <Logsheet />
      </div>
    </div>
  );
}

export default Monitoring;
