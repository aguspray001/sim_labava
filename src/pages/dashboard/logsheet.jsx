import { PackingContext } from "@/context/packingContext";
import { API_PORT, API_URI } from "@/data/api";
import { logsheetPackingHeader } from "@/data/logsheet-packing";
import { dateFormarter } from "@/helper";
import ButtonController from "@/widgets/components/buttonController";
import DatePicker from "@/widgets/components/datePicker";
import InputForm from "@/widgets/components/inputForm";
import { Modal } from "@/widgets/components/modal";
import LogsheetForm from "@/widgets/components/molecules/logsheetForm";
import TransactionTable from "@/widgets/components/molecules/transactionTable";
import Pagination from "@/widgets/components/paging";
import { SelectInput } from "@/widgets/components/SelectForm";
import Toast from "@/widgets/components/Toast";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export function Logsheet() {
  const { setIsLoading } = useContext(PackingContext);

  const [open, setOpen] = React.useState(false);
  const [openTransaction, setOpenTransaction] = React.useState(false);
  const [openCheckForm, setOpenCheckForm] = React.useState(false);
  const [logsheetData, setLogsheetData] = useState([
    {
      id_dpm: null,
      new_seq: null,
      start: null,
      finish: null,
      duration: null,
      feed_no: null,
      po_no: null,
      total_tonage: null,
      weight_per_bag: null,
      counter_result: null,
      remnant: null,
      feeder_speed: null,
      ori_sack_usage: null,
      package_problem: null,
      counter_failure: null,
      counter_start: null,
      total_cucian: null,
      total_repro: null,
      total_wbt: null,
      total_remix: null,
      total_hold: null,
      counter_finish: null,
      total_release: null,
      note: null,
      feed_no_ori: null,
      po_no_ori: null,
      kode_label: null,
      store_loc: null,
      doc_gi: null,
      doc_gr: null,
      urutan: null,
      flag_otg: null,
      category: null,
    },
  ]);
  const [logsheet, setLogsheet] = useState({
    id_dpm: "",
    // seq: "",
    id_bin: "",
    start: "",
    finish: "",
    duration: "",
    feed_no: "",
    po_no: "",
    total_tonage: "",
    weight_per_bag: "",
    counter_result: "",
    remnant: "",
    feeder_speed: "",
    ori_sack_usage: "",
    package_problem: "",
    counter_failure: "",
    counter_start: "",
    total_cucian: "",
    total_repro: "",
    total_wbt: "",
    total_remix: "",
    total_hold: "",
    counter_finish: "",
    total_release: "",
    note: "",
    feed_no_ori: "",
    po_no_ori: "",
    kode_label: "",
    store_loc: "",
    doc_gi: "",
    doc_gr: "",
    urutan: "",
    flag_otg: "",
    category: "",
  });
  const [logsheetPaging, setLogsheetPaging] = useState(1);
  const [transactionData, setTransactionData] = useState([
    {
      id_dpm: "",
      date_created: "",
      id_shift: "",
      id_device: "",
      operator: "",
      supervisor: "",
      status: "",
      kerani_fg: "",
    },
  ]);
  const [transaction, setTransaction] = useState({
    id_shift: "",
    id_device: "",
    operator: "",
    supervisor: "",
    status: "",
    kerani_fg: "",
  });
  const [filterPONumber, setFilterPONumber] = useState("");
  const [operatorData, setOperatorData] = useState([]);
  const [keraniData, setKeraniData] = useState([]);
  const [supervisorData, setSupervisorData] = useState([]);
  const [packingLines, setPackingLines] = useState([]);
  const [active, setActive] = React.useState(1);
  const [addTransactionMode, setAddTransactionMode] = useState(false);
  const [selectedRowTransaction, setSelectedRowTransaction] = useState(null);
  const [poNumbers, setPoNumbers] = useState([]);
  const [feedCodes, setFeedCodes] = useState([]);

  const shiftData = [
    {
      value: 1,
      name: "Shift 1",
    },
    {
      value: 2,
      name: "Shift 2",
    },
    {
      value: 3,
      name: "Shift 3",
    },
  ];
  const statusData = [
    {
      value: 1,
      name: "open",
    },
    {
      value: 0,
      name: "close",
    },
  ];

  const onChangeTransaction = (e) => {
    setTransaction((transaction) => ({
      ...transaction,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeLogsheet = (e) => {
    setLogsheet((logsheet) => ({
      ...logsheet,
      [e.target.name]: e.target.value,
    }));
  };

  const next = (setActive, active, max, limit) => {
    const maxFix = max - setActive * limit;
    if (active === maxFix) return;

    setActive(active + 1);
  };

  const prev = (setActive, active, min) => {
    if (active === min) return;

    setActive(active - 1);
  };

  const handleOpen = () => setOpen(!open);
  const handleOpenTransaction = () => setOpenTransaction(!openTransaction);
  const handleOpenCheckForm = () => setOpenCheckForm(!openCheckForm);

  const getListLogsheet = async (idDPM, limit, page) => {
    setIsLoading(true);
    axios
      .get(
        `${API_URI}:${API_PORT}/logsheet/packings/?id_dpm=${idDPM}&limit=${limit}&page=${page}`
      )
      .then((res) => {
        setLogsheetData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Error getting list logsheet data", {
          position: "top-right",
        });
        setIsLoading(false);
      });
  };

  const getListTransaction = async (limit, page) => {
    setIsLoading(true);
    axios
      .get(
        `${API_URI}:${API_PORT}/logsheet/header/?limit=${limit}&page=${page}`
      )
      .then((res) => {
        setTransactionData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Error getting list transaction data", {
          position: "top-right",
        });
      });
  };

  const postTransaction = async (data) => {
    if (
      data?.id_shift !== "" &&
      data?.id_device !== "" &&
      data?.operator !== "" &&
      data?.supervisor !== "" &&
      data?.status !== "" &&
      data?.kerani_fg !== ""
    ) {
      setIsLoading(true);
      axios
        .post(`${API_URI}:${API_PORT}/logsheet/header/`, data)
        .then((res) => {
          setTransaction(res?.data?.data);
          toast.success("Success uploading data to database", {
            position: "top-right",
          });
          setIsLoading(false);
        })
        .catch((err) =>
          toast.error(err, {
            position: "top-right",
          })
        )
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      toast.error("Data is not complete", {
        position: "top-right",
      });
    }
  };

  let valueResult =
    parseInt(logsheet?.counter_finish) -
    (parseInt(logsheet?.total_wbt) +
      parseInt(logsheet?.total_hold) +
      parseInt(logsheet?.total_cucian) +
      parseInt(logsheet?.total_repro) +
      parseInt(logsheet?.counter_failure));

  const postLogsheet = async (data) => {
    setIsLoading(true);
    axios
      .post(`${API_URI}:${API_PORT}/logsheet/packing/`, data)
      .then((res) => {
        setLogsheet(res?.data?.data);
        toast.success("Success uploading data to database", {
          position: "top-right",
        });

        setLogsheetData([
          ...logsheetData,
          {
            counter_result: valueResult?.toString(),
          },
        ]);
        setLogsheetData([...logsheetData, res?.data?.data]);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: "top-right",
        });
        setIsLoading(false);
      });
  };

  const getListUsers = async (groupName, setData) => {
    setIsLoading(true);

    axios
      .get(`${API_URI}:${API_PORT}/auth/users/?group_user=${groupName}`)
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Error getting user data", {
          position: "top-right",
        });
        setIsLoading(false);
      });
  };

  const getListPackingLine = async () => {
    setIsLoading(true);
    axios
      .get(`${API_URI}:${API_PORT}/logsheet/devices/`)
      .then((res) => {
        setPackingLines(res);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Error getting packing line data", {
          position: "top-right",
        });
        setIsLoading(false);
      });
  };

  const addMode = () => {
    setAddTransactionMode((prevVal) => !prevVal);
    setSelectedRowTransaction(null);
    setTransaction({
      date_created: new Date(),
      id_shift: "",
      id_device: "",
      operator: "",
      supervisor: "",
      status: "",
      kerani_fg: "",
    });
  };

  const onSelectRowHeaderTable = (val) => {
    setSelectedRowTransaction(val);
    handleOpenTransaction();
  };

  const getPoNumbers = async (feed_no) => {
    setIsLoading(true);
    axios
      .get(
        `${API_URI}:${API_PORT}/logsheet/po-by-feedcode/?feed_code=${feed_no}`
      )
      .then((res) => {
        setPoNumbers(res);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Error getting PO data", {
          position: "top-right",
        });
        setIsLoading(false);
      });
  };

  const getFeedCode = async () => {
    setIsLoading(true);
    axios
      .get(`${API_URI}:${API_PORT}/logsheet/feedcode/`)
      .then((res) => {
        setFeedCodes(res);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Error getting Feed Code data", {
          position: "top-right",
        });
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getFeedCode();
    return () => {};
  }, [selectedRowTransaction]);

  useEffect(() => {
    getPoNumbers(logsheet?.feed_no || "S12G");
    return () => {};
  }, [selectedRowTransaction, logsheet]);

  useEffect(() => {
    getListTransaction(5, active);
    return () => {};
  }, [openTransaction, active]);

  useEffect(() => {
    getListTransaction(5, active);
    getListUsers("supervisor", setSupervisorData);
    getListUsers("kerani", setKeraniData);
    getListUsers("operator", setOperatorData);
    getListPackingLine();
    return () => {};
  }, []);

  useEffect(() => {
    getListLogsheet(selectedRowTransaction?.id_dpm || "-", 5, logsheetPaging);
    return () => {};
  }, [selectedRowTransaction, logsheetPaging]);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Toast />
      <Modal
        size={"xl"}
        title={"Logsheet Form"}
        open={open}
        handleOpen={handleOpen}
        onSave={() =>
          postLogsheet({
            ...logsheet,
            id_dpm: selectedRowTransaction?.id_dpm,
          })
        }
      >
        <LogsheetForm
          onChangeLogsheet={onChangeLogsheet}
          packingLine={selectedRowTransaction?.id_device}
          poNumbers={poNumbers}
          feedCode={feedCodes}
          counterResult={valueResult < 0 ? 0 : valueResult}
        />
      </Modal>

      <Modal
        size={"xl"}
        title={"Transaction List"}
        open={openTransaction}
        handleOpen={handleOpenTransaction}
      >
        <div className="-mt-20">
          <TransactionTable
            setSelectedRow={onSelectRowHeaderTable}
            operator={operatorData?.data?.data?.data}
            kerani={keraniData?.data?.data?.data}
            supervisor={supervisorData?.data?.data?.data}
            next={() =>
              next(setActive, active, transactionData?.data?.data?.length, 5)
            }
            prev={() => prev(setActive, active, 1)}
            active={active}
            data={transactionData?.data?.data?.data}
            limit={5}
            lenData={transactionData?.data?.data?.length}
          />
        </div>
      </Modal>
      <Card className="w-[100%]">
        <CardHeader
          variant="gradient"
          className="bg-blue-900 mb-8 p-6 flex flex-row justify-between"
        >
          <div className="w-full flex flex-row justify-between">
            <Typography variant="h6" color="white">
              Daily Packing Logsheet
            </Typography>
            <div className="flex flex-row justify-between items-center gap-2">
              <Button
                onClick={() => handleOpenTransaction()}
                className="bg-white text-black"
              >
                Browse
              </Button>
              <Button onClick={addMode} className="bg-white text-black">
                Add
              </Button>
            </div>
          </div>
        </CardHeader>
        {selectedRowTransaction?.id_dpm && (
          <CardBody className="px-10">
            <div className="w-full min-w-[640px] table-auto flex flex-row justify-between mb-2 -mt-5">
              <div className="flex flex-col items-center gap-3">
                <InputForm
                  name={"id_dpm"}
                  title={"Transaction Number"}
                  value={
                    selectedRowTransaction?.id_dpm
                      ? selectedRowTransaction?.id_dpm
                      : transaction?.id_dpm || ""
                  }
                  disabled
                />
                <DatePicker
                  name={"date_created"}
                  disabled
                  label={"Select the date"}
                  value={
                    selectedRowTransaction?.date_created
                      ? dateFormarter(
                          new Date(selectedRowTransaction?.date_created)
                        )
                      : dateFormarter(transaction?.date_created || new Date())
                  }
                  onChange={onChangeTransaction}
                />
                <SelectInput
                  name={"id_shift"}
                  value={
                    selectedRowTransaction?.id_shift
                      ? selectedRowTransaction?.id_shift
                      : transaction?.id_shift || ""
                  }
                  data={shiftData}
                  label={"Shift"}
                  onChange={onChangeTransaction}
                  disabled={selectedRowTransaction?.id_shift}
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <SelectInput
                  name={"id_device"}
                  value={
                    selectedRowTransaction?.id_device
                      ? selectedRowTransaction?.id_device
                      : transaction?.id_device || ""
                  }
                  data={packingLines?.data?.data?.data || ""}
                  label={"Packing Line"}
                  onChange={onChangeTransaction}
                  disabled={selectedRowTransaction?.id_device}
                />
                <SelectInput
                  name={"operator"}
                  label={"Operator"}
                  value={
                    selectedRowTransaction?.operator
                      ? selectedRowTransaction?.operator
                      : transaction?.operator || ""
                  }
                  onChange={onChangeTransaction}
                  data={operatorData?.data?.data?.data}
                  disabled={selectedRowTransaction?.operator}
                />

                <SelectInput
                  name={"supervisor"}
                  label={"Supervisor"}
                  value={
                    selectedRowTransaction?.supervisor
                      ? selectedRowTransaction?.supervisor
                      : transaction?.supervisor?.toString() || ""
                  }
                  onChange={onChangeTransaction}
                  data={supervisorData?.data?.data?.data}
                  disabled={selectedRowTransaction?.supervisor}
                />
              </div>
              <div className="flex flex-col items-end gap-3">
                <SelectInput
                  name={"kerani_fg"}
                  label={"Kerani FG"}
                  value={
                    selectedRowTransaction?.kerani_fg
                      ? selectedRowTransaction?.kerani_fg
                      : transaction?.kerani_fg || ""
                  }
                  onChange={onChangeTransaction}
                  data={keraniData?.data?.data?.data}
                  disabled={selectedRowTransaction?.kerani_fg}
                />
                <SelectInput
                  name={"status"}
                  label={"Status"}
                  value={
                    selectedRowTransaction?.status
                      ? selectedRowTransaction?.status
                      : transaction?.status || ""
                  }
                  onChange={onChangeTransaction}
                  data={statusData}
                  disabled={selectedRowTransaction?.status}
                />
                {addTransactionMode && (
                  <Button
                    onClick={() => postTransaction(transaction)}
                    className="bg-blue-800 text-white"
                  >
                    Save
                  </Button>
                )}
              </div>
            </div>
          </CardBody>
        )}
      </Card>

      <Card className="w-[100%]">
        <CardHeader
          variant="gradient"
          className="bg-blue-900 mb-8 p-6 flex flex-row justify-between"
        >
          <div className="w-2/12">
            <Typography variant="h6" color="white">
              Logsheet Packing
            </Typography>
          </div>
          <div className="flex flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              {/* <p className="text-white">PO:</p> */}
              <Input
                size="lg"
                placeholder="Filter by PO Number"
                className=" !border-t-blue-gray-200 focus:!border-white text-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setFilterPONumber(e.target.value)}
              />
            </div>
            {/* <Button className="bg-white text-black">Search</Button> */}
            {selectedRowTransaction && (
              <Button
                onClick={() => handleOpen()}
                className="bg-white text-black"
              >
                Add
              </Button>
            )}
          </div>
        </CardHeader>
        <CardBody className="px-2 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {logsheetPackingHeader.map((el) => (
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
              {logsheetData?.data?.data?.data
                ?.filter((val, key) => {
                  return filterPONumber === null || filterPONumber === ""
                    ? val
                    : val.po_no.includes(filterPONumber);
                })
                .sort((a, b) => a.seq - b.seq)
                .map(
                  (
                    {
                      seq,
                      start,
                      finish,
                      duration,
                      po_no,
                      feed_no,
                      from_bin,
                      total_tonage,
                      counter_finish,
                      total_cucian,
                      total_release,
                      remnant,
                      total_wbt,
                      total_hold,
                      counter_result,
                      ori_sack_usage,
                      weight_per_bag,
                    },
                    key
                  ) => {
                    const className = `py-3 px-2 ${
                      key === logsheetData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50 text-center"
                    }`;

                    return (
                      <tr key={`${feed_no}-${key}`}>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {seq}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {start}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {finish}
                          </Typography>
                        </td>
                        {/* <td className={className}>
                        <Typography className="text-xs font-semibold text-black">
                          {duration}
                        </Typography>
                      </td> */}
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {po_no}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {feed_no}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {from_bin !== "" ? from_bin?.name : "-"}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {total_tonage}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {counter_finish}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {total_cucian}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {total_release}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {remnant}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {total_wbt}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {total_hold}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {counter_result}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {ori_sack_usage}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-black">
                            {weight_per_bag}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="flex flex-row justify-between gap-4">
                            <Button
                              className="bg-yellow-900"
                              onClick={console.log}
                            >
                              Edit
                            </Button>
                            <ButtonController
                              buttonColor={"bg-blue-900"}
                              buttonName={"Manual"}
                            >
                              <div className="flex flex-col justify-center items-center">
                                <p className="font-bold pb-4 text-black">
                                  Manual
                                </p>
                                {from_bin === "" ? (
                                  <p>Cannot control bin</p>
                                ) : (
                                  from_bin?.name?.split(",").map((v, k) => {
                                    return (
                                      <div
                                        key={k}
                                        className="flex flex-row justify-between gap-2 items-center pb-2"
                                      >
                                        <p className="font-bold text-red-900">
                                          {v}:
                                        </p>
                                        <Button color="green">I</Button>
                                        <Button color="red">O</Button>
                                      </div>
                                    );
                                  })
                                )}
                              </div>
                            </ButtonController>
                            <ButtonController
                              buttonColor={"bg-green-900"}
                              buttonName={"Auto"}
                            >
                              <div className="flex flex-col justify-center items-center">
                                <p className="font-bold pb-4">Auto</p>
                                <div className="flex flex-row justify-between gap-2">
                                  <Button
                                    color="green"
                                    onClick={() => handleOpenCheckForm()}
                                  >
                                    I
                                  </Button>
                                  <Button color="red">O</Button>
                                </div>
                              </div>
                            </ButtonController>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>
          <Pagination
            next={() =>
              next(
                setLogsheetPaging,
                logsheetPaging,
                logsheetData?.data?.data?.length,
                5
              )
            }
            prev={() => prev(setLogsheetPaging, logsheetPaging, 1)}
            active={logsheetPaging}
            limit={5}
            lenData={logsheetData?.data?.data?.length}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default Logsheet;
