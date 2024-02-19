import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { useState } from 'react';
import { daftarPeminjamAlat } from "@/data";
import axios from "axios";

export function DaftarRentStuff() {
  const [daftarPeminjam, setDaftarPeminjam] = useState(daftarPeminjamAlat);

  const handleAccept = (index) => {
    const newDaftarPeminjam = [...daftarPeminjam];
    newDaftarPeminjam[index].status = "Accepted";
    setDaftarPeminjam(newDaftarPeminjam);
  };

  const handleReject = (index) => {
    const newDaftarPeminjam = [...daftarPeminjam];
    newDaftarPeminjam[index].status = "Rejected";
    setDaftarPeminjam(newDaftarPeminjam);
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Daftar Peminjam Alat Inventaris Lab AVA
          </Typography>
        </CardHeader>
        <CardBody className="overflow-y-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Peminjam", "Tanggal Peminjaman", "Tanggal Pengembalian", "Keperluan", "Dosen Pengampu", "Jurusan/Organisasi", "Aksi"].map((el, index) => (
                  <th
                    key={index}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {daftarPeminjam.map(
                ({ user, rent_date, return_date, purpose, dosen_pengampu, organization, status }, index) => {
                  const className = `py-3 px-5 ${index === daftarPeminjam.length - 1 ? "" : "border-b border-blue-gray-50"}`;
                  return (
                    <tr key={index}>
                      <td className={className}>
                        <Typography variant="small" color="blue-gray" className="font-semibold">{user}</Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">{rent_date}</Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">{return_date}</Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">{purpose}</Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">{dosen_pengampu}</Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">{organization}</Typography>
                      </td>
                      <td className={className}>
                        {status === "Accepted" && <Typography className="text-xs font-semibold text-green-600">Permintaan disetujui</Typography>}
                        {status === "Rejected" && <Typography className="text-xs font-semibold text-red-600">Permintaan ditolak</Typography>}
                        {status !== "Accepted" && status !== "Rejected" && (
                          <div className="flex gap-2">
                            <Button color="green" onClick={() => handleAccept(index)}>Accept</Button>
                            <Button color="red" onClick={() => handleReject(index)}>Reject</Button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default DaftarRentStuff;
