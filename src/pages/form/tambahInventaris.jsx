import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

import React, { useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export const TambahInventaris = () => {

  const [token, setToken] = useState(null);
  const [name_stuff, setNameStuff] = useState(null);
  const [buy_date, setBuyDate] = useState(null);
  const [owner, setOwner] = useState(null);
  const [current_condition, SetCurrentCondition] = useState(null);
  const [status, SetStatus] = useState(null);
  const [inventaris_code, setInventarisCode] = useState(null);
  const [category_id, setCategoryId] = useState(null);

  const addStuff = async (name_stuff, buy_date, owner, current_condition, status, inventaris_code, category_id) => {
    axios.defaults.baseURL = 'http://103.106.72.182:8101/api/v1/'
    const resp = await axios({
      url: "stuff", method: 'post', data: {
        name_stuff, buy_date, owner, current_condition, status, inventaris_code, category_id
      }
    })
    setToken(resp);
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12 justify-center items-center">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Form Penambahan Alat inventaris Lab AVA
          </Typography>
        </CardHeader>
        <CardBody className="px-0 pt-0 pb-2">
          <form className="mt-8 mb-2 w-full max-w-screen-lg grid grid-cols-2 gap-6">
            <div className="ml-2 pl-3 flex flex-col gap-6">
              {/* <div className="flex gap-6"> */}
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Nama Alat
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => setNameStuff(e.target.value)}
                  placeholder="Nama Peminjam"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Tanggal Pembelian
                </Typography>
                <Input
                  type="date"
                  size="lg"
                  onChange={(e) => setBuyDate(e.target.value)}
                  placeholder="NIM"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              {/* </div> */}
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Pemilik Inventaris
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => setOwner(e.target.value)}
                  placeholder="Prodi"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Kondisi Alat
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => SetCurrentCondition(e.target.value)}
                  placeholder="0812xxxxxx"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
            </div>
            <div className="mr-2 pr-3 flex flex-col gap-6">
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Status
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => SetStatus(e.target.value)}
                  placeholder="Organisasi / Jurusan"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Nomor Inventaris
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => setInventarisCode(e.target.value)}
                  placeholder="Organisasi / Jurusan"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Kategori
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => setCategoryId(e.target.value)}
                  placeholder="Nama Dosen Pengampu"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
            </div>
          </form>
          <div>
            <div className="flex flex-col gap-6 col-span-2 items-center">
              <Button className="my-4" color="indigo" size="lg" onClick={() => addStuff(name_stuff, buy_date, owner, current_condition, status, inventaris_code, category_id)}>
                Submit
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default TambahInventaris