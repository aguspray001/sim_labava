import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Button,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { daftarPeminjamAlat } from "@/data";

export function Tables() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Daftar Peminjam Alat Inventaris
          </Typography>
        </CardHeader>
        {/* <CardBody className="overflow-x-scroll px-0 pt-0 pb-2"> */}
        <CardBody className="overflow-y-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Peminjam", "Tanggal Peminjaman", "Tanggal Pengembalian", "Keperluan", "Dosen Pengampu", "Jurusan/Organisasi"].map((el) => (
                  <th
                    key={el}
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
              {daftarPeminjamAlat.map(
                ({ user, rent_date, return_date, purpose, dosen_pengampu, organization }, key) => {
                  const className = `py-3 px-5 ${key === daftarPeminjamAlat.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                    }`;
                  return (
                    <tr key={user}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          {/* <Avatar src={img} alt={user} size="sm" variant="rounded" /> */}
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {user}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {rent_date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {return_date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {purpose}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {dosen_pengampu}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {organization}
                        </Typography>
                      </td>
                      {/* <td className={className}>
                        <Chip
                          variant="gradient"
                          color={online ? "green" : "blue-gray"}
                          value={online ? "accepted" : "rejected"}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td> */}
                      <td className={className}>
                        <Button color="green">Accept</Button>
                        <Button color="red" style={{ marginLeft: 10 }}>Reject</Button>
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

export default Tables;
