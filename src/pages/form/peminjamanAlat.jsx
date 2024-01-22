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
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="ml-8 mb-1 flex flex-col gap-6">
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
          <DatePicker/>

          {/* tanggal pengembalian */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Tanggal Pengembalian
          </Typography>
          <DatePicker/>
        <Button className="mt-6" fullWidth>
          Submit
        </Button>
        </div>
        </form>
      </CardBody>
    </Card>
    </div>
  )
}

export default PeminjamanAlat