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
import { daftarInventaris } from "@/data";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export function Stuff() {
    const [stuffData, setStuffData] = useState([]);

    useEffect(() => {
        const fetchStuffData = async () => {
            try {
                const response = await axios.get('URL_API_ANDA');
                setStuffData(response.data);
            } catch (error) {
                console.error('Error fetching stuff data:', error);
            }
        };

        fetchStuffData();
    }, []);

    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex justify-between items-center">
                    <Typography variant="h6" color="white">
                        Daftar Inventaris Alat Lab AVA
                    </Typography>
                    <div>
                        <a href="tambahInventaris">
                            <Button color="indigo" size="lg" link>
                                Tambah Inventaris
                            </Button>
                        </a>
                    </div>
                </CardHeader>
                <CardBody className="overflow-y-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                {["Nama Alat", "Tanggal Pembelian", "Pemilik", "Kondisi", "Status", "Total", "No. Inventaris"].map((el) => (
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
                            {stuffData.map((stuff, index) => (
                                <tr key={index}>
                                    {/* Menampilkan data stuff */}
                                </tr>
                            ))}
                            {/* {daftarInventaris.map(
                                ({ name_stuff, buy_date, owner, current_condition, status, total, inventaris_number }, key) => {
                                    const className = `py-3 px-5 ${key === daftarInventaris.length - 1
                                        ? ""
                                        : "border-b border-blue-gray-50"
                                        }`;
                                    return (
                                        <tr key={name_stuff}>
                                            <td className={className}>
                                                <div className="flex items-center gap-4">
                                                    <div>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-semibold"
                                                        >
                                                            {name_stuff}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {buy_date}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {owner}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {current_condition}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {status}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {total}
                                                </Typography>
                                            </td>
                                            <td className={className}>
                                                <Typography className="text-xs font-semibold text-blue-gray-600">
                                                    {inventaris_number}
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                }
                            )} */}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
}

export default Stuff;
