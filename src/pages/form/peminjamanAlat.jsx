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
import DatePicker from '@/widgets/components/datePicker';
// import React from 'react';
// // import './App.css'; 
import TodosForm from './TodosForm';
import react from '@heroicons/react';

export const PeminjamanAlat = () => {
  const [token, setToken] = useState(null);
  const [nama, setNama] = useState(null);
  const [nim, setNim] = useState(null);
  const [prodi, setProdi] = useState(null);
  const [nohp, setNohp] = useState(null);
  const [jurusan, setJurusan] = useState(null);
  const [dosen, setDosen] = useState(null);
  const [keperluan, setKeperluan] = useState(null);
  const [datePengembalian, setDatePengembalian] = useState(null);
  const [datePeminjaman, setDatePeminjaman] = useState(null);
  const [catatan, setCatatan] = useState(null);

  const rent_stuff = async (nama, nim, prodi, nohp, jurusan, dosen, keperluan, datePengembalian, datePeminjaman, catatan) => {
    axios.defaults.baseURL = ''
    const resp = await axios({
      url: "", method: 'post', data: {
        nama, nim, prodi, nohp, jurusan, dosen, keperluan, datePengembalian, datePeminjaman, catatan
      }
    })
    setToken(resp);
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12 justify-center items-center">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Form Peminjaman Alat
          </Typography>
        </CardHeader>
        <CardBody className="px-0 pt-0 pb-2">
          <form className="mt-8 mb-2 w-full max-w-screen-lg grid grid-cols-2 gap-6">
            <div className="ml-2 pl-3 flex flex-col gap-6">
              <div className="flex gap-6">
                <div className="flex flex-col w-full">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Nama Peminjam
                  </Typography>
                  <Input
                    size="lg"
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Nama Peminjam"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{ className: "before:content-none after:content-none" }}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    NIM
                  </Typography>
                  <Input
                    size="lg"
                    onChange={(e) => setNim(e.target.value)}
                    placeholder="NIM"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{ className: "before:content-none after:content-none" }}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Program Studi
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => setProdi(e.target.value)}
                  placeholder="Prodi"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Nomor Hp
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => setNohp(e.target.value)}
                  placeholder="0812xxxxxx"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Tanggal Peminjaman
                </Typography>
                <DatePicker />
              </div>
            </div>
            <div className="mr-2 pr-3 flex flex-col gap-6">
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Organisasi / Jurusan
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => setJurusan(e.target.value)}
                  placeholder="Organisasi / Jurusan"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Dosen Pengampu
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => setDosen(e.target.value)}
                  placeholder="Nama Dosen Pengampu"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Keperluan peminjaman
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => setKeperluan(e.target.value)}
                  placeholder="Keperluan Peminjaman"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Tanggal Pengembalian
                </Typography>
                <DatePicker />
              </div>
            </div>
          </form>
          <div className="App">
            <Typography variant="h6" color="blue-gray" className="mb-3 mt-3 text-center">
              Kebutuhan Alat
            </Typography>
            <TodosForm />
          </div>
          <div className="mx-8">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Catatan Pengembalian
            </Typography>
            <textarea
              rows="10" cols="100"
              containerProps={{ className: "min-w-[72px]" }}
              onChange={(e) => setCatatan(e.target.value)}
              className=" border-solid border-2 border-gray-500 "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div>
            <div className="flex flex-col gap-6 col-span-2 items-center">
              <Button className="my-4" color="indigo" size="lg" onClick={() => rent_stuff(nama, nim, prodi, nohp, jurusan, dosen, keperluan, datePengembalian, datePeminjaman, catatan)}>
                Submit
              </Button>
              <Link to={`/dashboard/peminjaman-alat/pdf`} className='ml-3'>
                Generate PDF
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default PeminjamanAlat