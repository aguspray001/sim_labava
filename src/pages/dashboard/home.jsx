import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

export function Home() {
  return (
    <div className="mt-12">
      {/* <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div> */}
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                BAGI CIVITAS ACADEMICA FKES UNUSA
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-6 pt-0 pb-2">
            <ol type="1" class="list-disc list-inside">
              <li>Mengisi formulir yang telah disediakan (formulir berupa: (1) formulir peminjaman alat; (2) formulir pemakaian studio dan perlengkapannya).</li>
              <li>Formulir bisa diserahkan ke Pengelola Lab. maksimal 2 (dua) hari sebelum pelaksanaan proses produksi (baik di dalam Lab. maupun proses produksi di luar Laboratorium).</li>
              <li>Urutan pemakaian laboratorium disesuaikan dengan waktu penerimaan formulir (“siapa cepat, dia dapat”).</li>
              <li>Waktu pemakaian Laboratorium Multimedia disesuaikan dengan jadwal perkuliahan, Senin – Jumat; 08.00 – 20.00 WIB.</li>
              <li>Durasi peminjaman alat Laboratorium Audio Visual untuk kepentingan pengambilan gambar di luar kampus adalah 4 (empat) jam. Peralatan shooting tidak boleh dibawa pulang ke rumah.</li>
              <li>Saat memakai laboratorium TV dan Fotografi, tidak diperkenankan menggunakan properti api dan air.</li>
              <li>Saat memakai laboratorium TV dan Fotografi, tidak diperbolehkan menempel properti permanen atau yang bisa meninggalkan bekas, tanpa seizin Penanggung Jawab Lab.</li>
              <li>Alat Audio Visual yang dibawa untuk pengambilan gambar di luar studio, wajib diperiksa kondisinya saat meminjam dan mengembalikan oleh Pengelola Lab. dan Peminjam - secara bersamaan. Setelah alat diperiksa oleh Pengelola Lab. maupun Peminjam, kedua pihak kemudian menandatangani berkas peminjaman/pengembalian.</li>
              <li>Jika ada kerusakan alat, seperti tergores atau ada tombol yang menjadi tidak berfungsi saat pengembalian, maka nilai kerusakan akan dibebankan pada Peminjam. Nilai kerusakan bisa dikonversi ke dalam sanksi akademis, tergantung tingkat kerusakan.</li>
              <li>Untuk klub mahasiswa, bisa memakai studio dan peralatan lainnya di luar jam praktik kuliah. Saat waktu peminjaman bersamaan, laboratorium serta peralatan lainnya akan diutamakan untuk praktik perkuliahan.</li>
              <li>Tidak diperbolehkan makan dan minum di dalam Lab. Multimedia.</li>
            </ol>
          </CardBody>
        </Card>
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                BAGI CIVITAS ACADEMICA UNUSA - DI LUAR FKES
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-6 pt-0 pb-2">
            <ol type="1" class="list-disc list-inside">
              <li>Mengisi formulir yang telah disediakan (formulir berupa: (1) formulir peminjaman alat; (2) formulir pemakaian studio dan perlengkapannya).</li>
              <li>Formulir bisa diserahkan ke Pengelola Lab. maksimal 2 (dua) hari sebelum pelaksanaan proses produksi (baik di dalam Lab. maupun proses produksi di luar Laboratorium).</li>
              <li>Urutan pemakaian laboratorium disesuaikan dengan waktu penerimaan formulir (“siapa cepat dia, dapat”). </li>
              <li>Waktu pemakaian Laboratorium Multimedia disesuaikan dengan jadwal perkuliahan, Senin-Jumat; 08.00 – 20.00 WIB. </li>
              <li>Durasi peminjaman alat Laboratorium Audio Visual untuk kepentingan pengambilan gambar di luar kampus adalah 4 (empat) jam. Peralatan shooting tidak boleh dibawa pulang ke rumah. </li>
              <li>Bagi civitas academica UNUSA di luar FKes yang meminjam alat maupun ruangan Lab, dikenakan biaya perawatan Lab. (besaran biaya terlampir). </li>
              <li>Alat Audio Visual yang dibawa untuk pengambilan gambar di luar studio, wajib diperiksa kondisinya saat meminjam dan mengembalikan oleh Pengelola Lab. dan Peminjam - secara bersamaan. Setelah alat diperiksa oleh Pengelola Lab. maupun Peminjam, kedua pihak kemudian menandatangani berkas peminjaman/pengembalian. </li>
              <li>Jika ada kerusakan alat, seperti tergores atau ada tombol yang menjadi tidak berfungsi saat pengembalian, maka nilai kerusakan akan dibebankan pada Peminjam. Nilai kerusakan TIDAK BISA dikonversi ke dalam sanksi akademis. </li>
              <li>Tidak diperbolehkan makan dan minum di dalam Lab. AVA.</li>
              <li>Saat memakai laboratorium TV dan Fotografi, tidak diperkenankan menggunakan properti api dan air.</li>
              <li>Saat memakai laboratorium TV dan Fotografi, tidak diperbolehkan menempel properti permanen atau yang bisa meninggalkan bekas, tanpa seizin Penanggung Jawab Lab.</li>

            </ol>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;
