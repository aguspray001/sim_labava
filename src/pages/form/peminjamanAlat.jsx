import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

import DatePicker from '@/widgets/components/datePicker';
import { Link } from 'react-router-dom';

// import React from 'react';
// // import './App.css'; 
import TodosForm from './TodosForm';

export const PeminjamanAlat = () => {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Form Peminjaman Alat
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <form className="mt-8 mb-2 w-100 max-w-screen-lg sm:w-96">
            <div className="ml-8 mb-1 flex flex-col gap-6">
              {/* Nama Peminjam */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Nama Peminjam
              </Typography>
              <Input
                size="lg"
                placeholder="Nama Peminjam"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {/* NIM */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                NIM
              </Typography>
              <Input
                size="lg"
                placeholder="NIM"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {/* Prodi */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Program Studi
              </Typography>
              <Input
                size="lg"
                placeholder="Prodi"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {/* nomor hp */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                No. HP
              </Typography>
              <Input
                size="lg"
                placeholder="0812xxxxxx"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {/* organisasi / jurusan */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Organisasi / Jurusan
              </Typography>
              <Input
                size="lg"
                placeholder="Organisasi / Jurusan"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {/* dosen pengampu */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Dosen Pengampu
              </Typography>
              <Input
                size="lg"
                placeholder="Nama Dosen Pengampu"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {/* keperluan peminjaman */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Keperluan Peminjaman
              </Typography>
              <Input
                size="lg"
                placeholder="Keperluan Peminjaman"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {/* list alat */}
              {/* tanggal peminjaman */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Tanggal Peminjaman
              </Typography>
              <DatePicker />

              {/* tanggal pengembalian */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Tanggal Pengembalian
              </Typography>
              <DatePicker />

              <div className="App">
                <h1>Dynamic Todo List</h1>
                <TodosForm />
              </div>
              {/* <div className="my-4 flex grid-rows-2 gap-4">
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Nama Alat
                  </Typography>
                  <Input
                    maxLength={4}
                    containerProps={{ className: "min-w-[72px]" }}
                    placeholder="000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Jumlah
                  </Typography>
                  <Input
                    maxLength={4}
                    containerProps={{ className: "min-w-[72px]" }}
                    placeholder="000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Kondisi Pinjam
                  </Typography>
                  <Input
                    maxLength={4}
                    containerProps={{ className: "min-w-[72px]" }}
                    placeholder="000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Kondisi Pengembalian
                  </Typography>
                  <Input
                    maxLength={4}
                    containerProps={{ className: "min-w-[72px]" }}
                    placeholder="000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Catatan Pengembalian
                  </Typography>
                  <Input
                    maxLength={4}
                    containerProps={{ className: "min-w-[72px]" }}
                    placeholder="000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              </div> */}
              <Button className="mt-6" fullWidth>
                Submit
              </Button>
              {/* <Button className="mt-2" fullWidth> */}
              <Link to={`/dashboard/peminjaman-alat/pdf`}>
                Generate PDF
              </Link>
              {/* </Button> */}
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}

export default PeminjamanAlat