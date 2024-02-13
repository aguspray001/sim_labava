import React from 'react';
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

export const PeminjamanRuangan = () => {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12 justify-center items-center">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Form Peminjaman Ruangan
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
                  placeholder="0812xxxxxx"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{ className: "before:content-none after:content-none" }}
                />
              </div>
              <div className="flex flex-col w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Tanggal Selesai Pengembalian
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
                  placeholder="Keperluan Peminjaman"
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
            <div className="flex flex-col gap-6 col-span-2 items-center">
              <Button className="my-4" color="indigo" size="lg">
                Submit
              </Button>
              <Link to={`/dashboard/peminjaman-alat/pdf`} className='ml-3'>
                Generate PDF
              </Link>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default PeminjamanRuangan;
